const httpStatus = require('http-status');
const fs = require('fs');
const path = require('path');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, courseService } = require('../services');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  let filter = {};
  if (req.query.search) {
    const searchInput = req.query.search;
    filter = {
      $or: [
        { name: { $regex: searchInput, $options: 'i' } },
        { role: { $regex: searchInput, $options: 'i' } },
        { email: { $regex: searchInput, $options: 'i' } },
      ],
    };
  }
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getHomepage = catchAsync(async (req, res) => {
  const { _id: userId, role } = req.user;
  let home = {};
  let teacherCourses;
  let studentCourses;
  switch (role) {
    case 'teacher':
      teacherCourses = await courseService.getAllCourses({ teacher: userId });
      home = {
        coursesCount: teacherCourses.length,
        studentsCount: teacherCourses.map((course) => course.students.length).reduce((a, b) => a + b, 0),
        resourcesCount: teacherCourses.map((course) => course.resources.length).reduce((a, b) => a + b, 0),
        questionsCount: teacherCourses.map((course) => course.questions.length).reduce((a, b) => a + b, 0),
      };
      break;
    case 'student':
      studentCourses = await courseService.getAllCourses({ 'students.user': userId });
      home = {
        studentCourses,
      };
      break;
    case 'admin':
      home = {
        coursesCount: await courseService.countCourses({}),
        studentsCount: await userService.countUsers({ role: 'student' }),
        teachersCount: await userService.countUsers({ role: 'teacher' }),
        resourcesCount: fs.readdirSync(path.resolve(process.cwd(), 'src/uploads')).length - 1,
      };
      break;
    default:
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized');
  }
  res.send(home);
});
module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getHomepage,
};
