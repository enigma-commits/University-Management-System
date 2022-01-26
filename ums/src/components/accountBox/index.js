import React, { useState } from "react";
import { Home } from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import Register from "./Register";
import Login from "./Login";
import RegisterFaculty from "./RegisterFaculty";
import LoginAdmin from "./LoginAdmin";
import { DashboardAdmin } from "./DashboardAdmin";
import { SelectSubject } from "./SelectSubject";
export function AccountBox(props) {
  const [user, setLoginUser] = useState({});
  const [admin, setLoginAdmin] = useState({});
  const [users, setUsers] = useState({});
  const [userSub, setUserSub] = useState({});
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
          <LoginAdmin setLoginUser={setLoginAdmin} />
        </Route>

        <Route path="/dashboard">
          {user && user._id ? (
            <Dashboard
              user={user}
              setLoginUser={setLoginUser}
              users={users}
              setUsers={setUsers}
              setUserSub={setUserSub}
              userSub={userSub}
            />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route path={"/selectsubject"}>
          {user && user._id ? (
            <SelectSubject
              user={user}
              setUserSub={setUserSub}
              userSub={userSub}
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
