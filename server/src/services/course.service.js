const Course = require('../models/course.model');

/**
 * Get courses by student id
 * @param {ObjectId} studentId
 * @returns {Promise<Course>}
 */
const getCoursesByStudentId = async (studentId) => Course.find({ 'students.user': studentId }).populate('students.progress').populate('teacher');

/**
 * Get courses by teacher id
 * @param {ObjectId} teacherId
 * @returns {Promise<Course>}
 */
const getCoursesByTeacherId = async (teacherId) => Course.find({ teacher: teacherId });

/**
 * Query for courses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCourses = async (filter, options) => Course.paginate(filter, options).populate('teacher');

/**
 * Create a course
 * @param {Object} courseBody
 * @returns
 */
const createCourse = async (courseBody) => (Course.create(courseBody));

module.exports = {
  queryCourses,
  createCourse,
  getCoursesByStudentId,
  getCoursesByTeacherId,
};
