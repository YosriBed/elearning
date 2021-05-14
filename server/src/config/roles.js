const roles = ['student', 'teacher', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['viewCourses', 'viewHomepage', 'joinCourse']);
roleRights.set(roles[1], ['manageCourses', 'viewCourses', 'viewHomepage']);
roleRights.set(roles[2], ['getUsers', 'viewHomepage', 'manageUsers', 'viewCourses', 'manageCourses']);

module.exports = {
  roles,
  roleRights,
};
