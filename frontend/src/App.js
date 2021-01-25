import React, { useContext, useEffect } from "react";
import { createBrowserHistory } from "history";
import {  Route, Switch, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
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