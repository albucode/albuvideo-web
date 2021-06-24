import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";

import PrivateRoute from "./PrivateRoute";
import { LogInPage } from "./features/authentication/LogInPage";
import { CurrentUser } from "./api/requests";
import { loadUser } from "./features/authentication/userSlice";
import { Dashboard } from "./features/dashboard/Dashboard";
import { VideosIndex } from "./features/videos/VideosIndex";
import { AccessTokensIndex } from "./features/accessTokens/AccessTokensIndex";
import { SignatureKeysIndex } from "./features/signatureKeys/SignatureKeysIndex";
import { SideBar } from "./features/navigation/SideBar";

const App = () => {
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

  return userEmail ? (
    <>
      <BrowserRouter>
        <Flex
          maxWidth="1530px"
          background="#F6F9FE"
          minH="100vh"
          margin="0 auto"
        >
          <SideBar />
          <Switch>
            <Route exact path="/login">
              <Redirect to="/dashboard" /> }
            </Route>
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
        </Flex>
      </BrowserRouter>
    </>
  ) : (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LogInPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
