const roles = ['student', 'teacher', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], []);
roleRights.set(roles[0], []);
roleRights.set(roles[2], ['getUsers', 'manageUsers']);

module.exports = {
  roles,
  roleRights,
};
