/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import App from './App'
import AdminLayout from "layouts/Admin.js";
import SignUp from "components/SignUp/SignUp";
import ProtectedRoute from "components/custom/ProtectedRoute";
import { UserContext } from "context/UserContext";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <App />,
  </Router>,
  document.getElementById("root")
);
