const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { courseService, questionService } = require('../services');
const ApiError = require('../utils/ApiError');

const createCourse = catchAsync(async (req, res) => {
  const body = {
    ...req.body,
    teacher: req.user._id,
  };
  if (req.files && req.files.length > 0) {
    body.resources = req.files.map((file) => ({ filename: file.filename, mimetype: file.mimetype, size: file.size }));
  }
  if (body.questions && body.questions.length > 0) {
    body.questions = await questionService.createQuestions(body.questions);
  }
  const createdCourse = await courseService.createCourse(body);
  res.status(httpStatus.CREATED).send({ slug: createdCourse.slug });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await courseService.getAllCourses({ visibility: 'Public' });
  res.send(result);
});

const getCourseBySlug = catchAsync(async (req, res) => {
  const course = await courseService.getCourse({ slug: req.params.slug });
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No course found');
  }
  res.send(course);
});

const downloadResource = catchAsync(async (req, res) => {
  const { resourceId } = req.params;
  const course = await courseService.getCourse({ 'resources._id': resourceId });
  const resourceIndex = course.resources.findIndex((r) => r._id.toString() === resourceId);
  if (resourceIndex === -1) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No resource found');
  }
  const resource = course.resources[resourceIndex];
  const file = `src/uploads/${resource.filename}`;
  res.download(file);
});

const joinCourse = catchAsync(async (req, res) => {
  const { slug } = req.params;
  const { _id: studentId } = req.user;

  const filter = { slug, 'students.user': { $ne: studentId } };
  const update = { $push: { students: { user: studentId } } };
  const course = await courseService.updateCourse(filter, update);
  res.send(course);
});
module.exports = {
  createCourse,
  getCourseBySlug,
  getAllCourses,
  downloadResource,
  joinCourse,
};
