const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const progressSchema = mongoose.Schema(
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
progressSchema.plugin(toJSON);
progressSchema.plugin(paginate);

/**
 * @typedef Progress
 */
const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
