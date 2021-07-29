import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import Header from "Components/Header";
import ConsultantData from "./consultantData";

const ConsultantNew = (props) => {
  const propShape = formStoreData(props, ["consultant", "supplier"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetSupplierStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Header />
          <ConsultantData />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

ConsultantNew.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default ConsultantNew;
