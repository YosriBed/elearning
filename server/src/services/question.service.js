const { Question } = require('../models');

/**
 * Create multiple questions
 * @param {Object[]} questions
 * @returns
 */
const createQuestions = async (questions) => Question.create(questions);

module.exports = {
  createQuestions,
};
