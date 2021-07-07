import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import Signuppage from "./Signuppage";
import Header from "Components/Header";

const Signup = (props) => {
  const propShape = formStoreData(props, ["signup"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetSignupStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Header/>
          <Signuppage />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Signup.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Signup;
