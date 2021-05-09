import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Account from './Authenticate';
import Register from './Register';

const index = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Account} />
      <Route exact path={`${path}/register`} component={Register} />
    </Switch>
  );
};

export default index;
