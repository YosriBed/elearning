const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');

const createCourse = catchAsync(async (req, res) => {
  const body = {
    ...req.body,
    teacher: req.user._id,
    resources: req.files.map((file) => ({ filename: file.filename, mimetype: file.mimetype, size: file.size })),
  };
  await courseService.createCourse(body);
  res.status(httpStatus.CREATED).send();
});

const getMyCourses = catchAsync(async (req, res) => {
  const { _id: userId, role } = req.user;
  let result = [];
  switch (role) {
    case 'teacher':
      result = await courseService.getCoursesByTeacherId(userId);
      break;
    case 'student':
      result = await courseService.getCoursesByStudentId(userId);
      break;
    default:
      result = await courseService.queryCourses({ visibility: 'Public' });
      break;
  }
  res.send(result);
});

/* const getAllCourses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
}); */

module.exports = {
  getMyCourses,
  createCourse,
};
