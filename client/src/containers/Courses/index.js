import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import List from './List';
import New from './New';
import Details from './Details';
import RestrictedRoute from '../../components/RestrictedRoute';

const index = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={List} />
      <RestrictedRoute
        path={`${path}/new`}
        component={New}
        requiredRoles={['teacher']}
      />
      <Route path={`${path}/details/:slug`} component={Details} />
    </Switch>
  );
};

export default index;
