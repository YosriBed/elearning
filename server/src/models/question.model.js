const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const questionSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['MCQ', 'Input'],
    },
    text: {
      type: String,
      required: true,
    },
    options: [{ type: String }],
    inputs: [{ type: String }],
    expectedAnswer: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
questionSchema.plugin(toJSON);
questionSchema.plugin(paginate);

/**
 * @typedef Question
 */
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
