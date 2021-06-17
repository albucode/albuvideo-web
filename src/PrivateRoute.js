import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, userEmail, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (userEmail ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
