import React, { useState } from "react";
import { Home } from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Register from "./Register";
import Login from "./Login";
export function AccountBox(props) {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login setLoginUser={setLoginUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          {user && user._id ? (
            <Dashboard user={user} setLoginUser={setLoginUser} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}
        </Route>
      </Router>
    </div>
  );
}
