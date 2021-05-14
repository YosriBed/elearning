import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import Layout from './Layout';
import Loading from '../containers/Loading';
import history from '../utils/history';
import RestrictedRoute from './RestrictedRoute';

const Home = loadable(() => import('../containers/Home'), {
  fallback: <Loading />,
});
const Authentication = loadable(() => import('../containers/Authentication'), {
  fallback: <Loading />,
});
const Onboarding = loadable(() => import('../containers/Onboarding'), {
  fallback: <Loading />,
});
const Courses = loadable(() => import('../containers/Courses'), {
  fallback: <Loading />,
});
const Users = loadable(() => import('../containers/Users'), {
  fallback: <Loading />,
});

const Routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/:role" component={Authentication} />
        <Route exact path="/onboarding/:role" component={Onboarding} />
        <RestrictedRoute
          path="/courses"
          component={Courses}
          requiredRoles={['teacher', 'student', 'admin']}
        />
        <RestrictedRoute
          path="/users"
          component={Users}
          requiredRoles={['admin']}
        />
        <Route path="*" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
