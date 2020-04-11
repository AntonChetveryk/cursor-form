import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

export const Routes = () => {
  const [isAuth, setIsAuth] = useState(false);

  function changeIsAuth() {
    setIsAuth(!isAuth);
  }

  return (
    <Router basename="cursor-form">
      <Switch>
        <Layout isAuth={isAuth}>
          <Route exact path="/">
            <SignIn changeIsAuth={changeIsAuth} />
          </Route>
          <Route exact path="/sign-up" component={SignUp} />
        </Layout>
      </Switch>
    </Router>
  );
};
