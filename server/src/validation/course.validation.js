const Joi = require('joi');

const getCourseBySlug = {
  params: Joi.object().keys({
    slug: Joi.string().required(),
  }),
};

module.exports = {
  getCourseBySlug,
};
