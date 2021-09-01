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
import { WebhookSubscriptionsIndex } from "./features/webhookSubscriptions/webhookSubscriptionsIndex";
import { VideosShow } from "./features/videos/VideosShow";
import VideoCreate from "./features/videos/VideoCreate";
import VideoEdit from "./features/videos/VideoEdit";

const App = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.user.email);

  const fetchCurrentUser = async () => {
    const response = await CurrentUser.show();

    dispatch(loadUser(response));
  };

  useEffect(() => {
    fetchCurrentUser();
  });

  return userEmail ? (
    <>
      <BrowserRouter>
        <Flex background="#F6F9FE" minH="100vh" margin="0 auto">
          <SideBar />
          <Switch>
            <Route exact path="/login">
              <Redirect to="/dashboard" /> }
            </Route>

            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/videos">
              <VideosIndex />
            </PrivateRoute>
            <PrivateRoute exact path="/videos/new">
              <VideoCreate />
            </PrivateRoute>
            <PrivateRoute exact path="/videos/:videoId">
              <VideosShow />
            </PrivateRoute>
            <PrivateRoute exact path="/videos/:videoId/edit">
              <VideoEdit />
            </PrivateRoute>
            <PrivateRoute exact path="/access-tokens">
              <AccessTokensIndex />
            </PrivateRoute>
            <PrivateRoute exact path="/signature-keys">
              <SignatureKeysIndex />
            </PrivateRoute>
            <PrivateRoute exact path="/webhook-subscriptions">
              <WebhookSubscriptionsIndex />
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
