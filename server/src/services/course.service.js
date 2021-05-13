const Course = require('../models/course.model');

/**
 * Query for courses
 * @returns {Promise<Course>}
 */
const getAllCourses = async (filter = {}) => Course.find(filter)
  .populate('teacher');

/**
 * Create a course
 * @param {Object} courseBody
 * @returns {Promise<Course>}
 */
const createCourse = async (courseBody) => Course.create(courseBody);

/**
 * Get a course
 * @param {Object} filter
 * @returns {Promise<Course>}
 */
const getCourse = async (filter) => Course.findOne(filter)
  .populate('questions')
  .populate('teacher')
  .populate('students.user');

/**
 * Update a course
 * @param {Object} filter
 * @param {Object} update
 * @returns {Promise<Course>}
 */
const updateCourse = async (filter, update) => Course.findOneAndUpdate(filter, update, { $new: true })
  .populate('questions')
  .populate('teacher')
  .populate('students.user');

module.exports = {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
};
