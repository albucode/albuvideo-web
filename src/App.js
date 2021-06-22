import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import { LogInPage } from "./features/authentication/LogInPage";
import { CurrentUser } from "./api/requests";
import { loadUser } from "./features/authentication/userSlice";
import { Dashboard } from "./features/dashboard/Dashboard";
import { Menu } from "./features/navigation/Menu";
import { VideosIndex } from "./features/videos/VideosIndex";
import { AccessTokensIndex } from "./features/accessTokens/AccessTokensIndex";
import { SignatureKeysIndex } from "./features/signatureKeys/SignatureKeysIndex";

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
      <Menu/>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
        <PrivateRoute exact path="/dashboard" userEmail={userEmail}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/videos" userEmail={userEmail}>
          <VideosIndex />
        </PrivateRoute>
        <PrivateRoute exact path="/access-tokens" userEmail={userEmail}>
          <AccessTokensIndex />
        </PrivateRoute>
        <PrivateRoute exact path="/signature-keys" userEmail={userEmail}>
          <SignatureKeysIndex />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
