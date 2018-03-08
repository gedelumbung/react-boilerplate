import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';

import Dashboard from "./component/Layout/Dashboard";
import { isLoggedIn } from "./helpers/auth";
import Loading from './component/Loading';

const loadAdbleComponent = (component) => (
  Loadable({
    loader: component,
    loading: Loading,
  })
);

const AsyncLogin = loadAdbleComponent(() => import("./page/Login"));
const AsyncNotFound = loadAdbleComponent(() => import("./page/NotFound"));
const AsyncHome = loadAdbleComponent(() => import("./page/Dashboard/Home"));
const AsyncUsers = loadAdbleComponent(() => import("./page/Dashboard/Users"));

const App = () => (
  <Switch>
    <Route exact path="/" component={AsyncLogin} />
    {isLoggedIn() && (
      <Fragment>
        <Dashboard path="/dashboard" component={AsyncHome} />
        <Dashboard path="/users" component={AsyncUsers} />
      </Fragment>
    )}
    <Route exact path="*" component={AsyncNotFound} />
  </Switch>
);

export default App;
