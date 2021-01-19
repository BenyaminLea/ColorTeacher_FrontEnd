import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import SignUp from "components/SignUp/SignUp";
import ProtectedRoute from "routes/ProtectedRoute";
import { UserContext } from "context/UserContext";
import auth from "./components/lib/auth";

const hist = createBrowserHistory();

function App(props) {
  const context = useContext(UserContext);
  const previouslyLogged = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log(context.user);
    if (previouslyLogged) {
      context.setUserInfo(previouslyLogged);
      auth.login(() => {
        props.history.push(`/admin/main`);
      });
    }
  }, []);

  return (

    <Switch>
      <Route
        path="/admin"
        render={(props) => <AdminLayout {...props} user={context.user} />}
      />
      <Route
        path="/"
        render={(props) => <AdminLayout {...props} />}
      />
    </Switch>

  );
}

export default withRouter(App);