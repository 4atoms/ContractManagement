import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ ...restProps }) => {
  const acctoken = sessionStorage.getItem("accessToken");
  if (!acctoken) {
    return <Redirect to="/login" />;
  }
  return <Route {...restProps} />;
};

export default AuthRoute;
