import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const RestrictedRoute = ({ path, component, requiredRoles = [] }) => {
  const user = useSelector((state) => state.user);
  if (user && requiredRoles.includes(user.role)) {
    return <Route path={path} component={component} />;
  }
  return <Redirect path="/" to="/" />;
};

RestrictedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  requiredRoles: PropTypes.arrayOf(PropTypes.string),
};
export default RestrictedRoute;
