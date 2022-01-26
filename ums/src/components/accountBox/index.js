import React, { useState } from "react";
import { Home } from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Register from "./Register";
import Login from "./Login";
import RegisterFaculty from "./RegisterFaculty";
import LoginAdmin from "./LoginAdmin";
import { DashboardAdmin } from "./DashboardAdmin";
export function AccountBox(props) {
  const [user, setLoginUser] = useState({});
  const [admin, setLoginAdmin] = useState({});
  const [users, setUsers] = useState({});
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
        <Route path="/regadmin">
          <RegisterFaculty />
        </Route>
        <Route path="/loginadmin">
          <LoginAdmin setLoginUser={setLoginAdmin} setUsers={setUsers} />
        </Route>

        <Route path="/dashboard">
          {user && user._id ? (
            <Dashboard
              user={user}
              setLoginUser={setLoginUser}
              users={users}
              setUsers={setUsers}
            />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route path="/dashboardadmin">
          {admin && admin._id ? (
            <DashboardAdmin
              user={admin}
              setLoginUser={setLoginAdmin}
              users={users}
              setUsers={setUsers}
            />
          ) : (
            <LoginAdmin setLoginUser={setLoginAdmin} setUsers={setUsers} />
          )}
        </Route>
      </Router>
    </div>
  );
}
