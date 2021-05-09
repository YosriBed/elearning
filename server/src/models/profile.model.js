const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const profileSchema = mongoose.Schema(
  {
    lang: {
      type: String,
      default: 'en',
    },
    langLevel: {
      type: String,
    },
    location: {
      type: String,
    },
    avatar: {
      type: String,
    },
    notifications: {
      type: Boolean,
      default: false,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    offers: {
      type: Boolean,
      default: false,
    },

  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
profileSchema.plugin(toJSON);
profileSchema.plugin(paginate);

/**
 * @typedef Profile
 */
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
