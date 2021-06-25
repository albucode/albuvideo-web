import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import { LogInPage } from "./features/authentication/LogInPage";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { CurrentUser } from "./api/requests";
import { loadUser } from "./features/authentication/userSlice";

function App() {
  const dispatch = useDispatch();

  const fetchCurrentUser = async () => {
    const response = await CurrentUser.show();

    dispatch(loadUser(response));
  };

  useEffect(() => {
    fetchCurrentUser();
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
        <PrivateRoute exact path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
