import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

export const Routes = () => (
  <Router>
    <Switch>
      <Layout>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Layout>
    </Switch>
  </Router>
);
