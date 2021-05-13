import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import List from './List';
import New from './New';
import Students from './Students';
import Overview from './Overview';
import Details from './Details';

const index = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={List} />
      <Route path={`${path}/overview/:slug`} component={Overview} />
      <Route path={`${path}/details/:slug`} component={Details} />
      <Route path={`${path}/students/:slug`} component={Students} />
      <Route path={`${path}/new`} component={New} />
    </Switch>
  );
};

export default index;
