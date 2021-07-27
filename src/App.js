import "./styles.css";
import React from "react";
import Navbar from "./Navbar/App";
import Home from "./Home/App";
// import Subject from "./Subjects/App";
import PublicRoute from "./PublicRoute";
import AllPage from "./AllPage";
import Profile from "./Profile/App";
import Login from "./EntryPoint/Login";
// import db from "./firebaseConfig";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Login}
            path="/login"
            exact
          />
        </Switch>
        <Switch>
          <PublicRoute
            restricted={false}
            component={AllPage}
            path="/notes"
            exact
          />
        </Switch>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/home" />
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PrivateRoute component={Profile} path="/profile" />
        </Switch>
      </Router>
    </div>
  );
}
