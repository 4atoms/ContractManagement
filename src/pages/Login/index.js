import React, { useEffect } from "react";
import { shape } from "prop-types";
import { notification } from "antd";
import cookie from "react-cookies";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import Loginpage from "./Loginpage";

const Login = (props) => {
  const propShape = formStoreData(props, ["auth"]);

  useEffect(() => {
    cookie.remove("access_token");
    if (sessionStorage.getItem("isCookieExpire")) {
      notifyAuthNeeded();
      sessionStorage.clear();
    }
    return () => {
      propShape.actions.resetAuthStore();
    };
  }, []);

  const notifyAuthNeeded = () => {
    notification.error({
      message: "Session Expired",
      description: "Please login again",
      duration: 2,
    });
  };

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Loginpage />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Login.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Login;
