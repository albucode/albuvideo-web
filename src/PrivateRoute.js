import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...props }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...props}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
