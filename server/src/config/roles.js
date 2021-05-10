const roles = ['student', 'teacher', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['viewCourses']);
roleRights.set(roles[1], ['manageCourses', 'viewCourses']);
roleRights.set(roles[2], ['getUsers', 'manageUsers', 'viewCourses', 'manageCourses']);

module.exports = {
  roles,
  roleRights,
};
