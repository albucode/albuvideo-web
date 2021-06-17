import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import { LogInPage } from "./features/authentication/LogInPage";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { CurrentUser } from "./api/requests";
import { loadUser } from "./features/authentication/userSlice";

function App() {
  const dispatch = useDispatch();

  const fetchCurrentUser = () => {
    CurrentUser.show().then((response) => {
      dispatch(loadUser(response));
    });
  };

  const userEmail = useSelector((state) => state.user.email);

  useEffect(() => {
    fetchCurrentUser();
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
        <PrivateRoute exact path="/dashboard" userEmail={userEmail}>
          <DashboardPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
