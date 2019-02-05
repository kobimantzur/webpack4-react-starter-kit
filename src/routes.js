import React from 'react';
import {
  Route, Redirect, Switch,BrowserRouter
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Results from './containers/Results';
const Routes = ({ history }) => (
  // <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results"  component={Results} />
        {/* <Redirect to="/404" /> */}
      </Switch>
      
    </Layout>
    // </BrowserRouter>
);

export default Routes;