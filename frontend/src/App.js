import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import SignUp from "components/SignUp/SignUp";
import ProtectedRoute from "components/custom/ProtectedRoute";
import { UserContext } from "context/UserContext";

const hist = createBrowserHistory();

export default function App() {
  const context = useContext(UserContext)
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    if ( currentUser === undefined && localStorage.getItem("user") ) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [context])

  return (
    <Router history={hist}>
      <Switch>
        <Route
          path="/admin"
          render={(props) => <AdminLayout {...props} user={currentUser} />}
        />
        <Route
          path="/"
          render={(props) => <AdminLayout {...props} user={currentUser} />}
        />
      </Switch>
    </Router>
  );
}
