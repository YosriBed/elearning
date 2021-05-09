const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const courseSchema = mongoose.Schema(
  {
    questions: [
      {
        question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        order: { type: Number },
      },
    ],
    students: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        progress: { type: mongoose.Schema.Types.ObjectId, ref: 'Progress' },
      },
    ],
    visibility: {
      type: String,
      enum: ['Private', 'Public'],
      default: 'Private',
    },

  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
courseSchema.plugin(toJSON);
courseSchema.plugin(paginate);

/**
 * @typedef Course
 */
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
