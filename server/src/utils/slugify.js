const slugify = require('slugify');
/**
 * Returns a slug of the given string
 * @param String toSlugify
 * @returns slug
 */
const slugifyString = (toSlugify) => slugify(toSlugify, {
  replacement: '-', // replace spaces with -
  remove: /[*+~.()'"!:@]/g, // remove characters that match regex (*+~.()'"!:@)
  lower: true, // convert to lower case
  strict: true, // strip special characters except replacement
  locale: 'vi', // language code of the locale to use
});

module.exports = slugifyString;
