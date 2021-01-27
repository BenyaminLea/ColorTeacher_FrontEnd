import React, { useContext, useEffect } from "react";
import { createBrowserHistory } from "history";
import { Route, Switch, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import { UserContext } from "context/UserContext";
import auth from "./components/lib/auth";
import protectedRoutes from "routes/protectedRoutes";
import routes from "routes/routes";
import protectedAdminRoutes from "routes/protectedAdminRoutes";

const hist = createBrowserHistory();

function App(props) {
  const context = useContext(UserContext);
  console.log(context);
  const previouslyLogged = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log(context.user, "userrrrr");
    if (previouslyLogged) {
      context.setUserInfo(previouslyLogged);
      auth.login(() => {
        props.history.push(`/dash/main`);
      });
    }
  }, []);

  return (

    <Switch>
      <Route
        path="/dash"
        render={(props) => <AdminLayout {...props} user={context.user} routes={context.user.type === "admin" ? [...protectedRoutes, ...protectedAdminRoutes] : protectedRoutes} />}
      />
      <Route
        path="/"
        render={(props) => <AdminLayout {...props} routes={routes} />}
      />
    </Switch>

  );
}

export default withRouter(App);