import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { LogInPage } from "./features/authentication/LogInPage";
import { DashboardPage } from "./features/dashboard/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={LogInPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
