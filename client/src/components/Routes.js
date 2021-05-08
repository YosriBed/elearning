import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import Layout from './Layout';
import Loading from '../containers/Loading';

const Home = loadable(() => import('../containers/Home'), {
  fallback: <Loading />,
});

const Routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
