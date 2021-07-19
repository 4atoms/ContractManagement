import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookie from "react-cookies";

const AuthRoute = ({ ...restProps }) => {
  const acctoken = cookie.load("access_token");
  if (!acctoken) {
    return <Redirect to="/login" />;
  }
  return <Route {...restProps} />;
};

export default AuthRoute;
