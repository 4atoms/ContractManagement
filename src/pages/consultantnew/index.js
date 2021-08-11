import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import ConsultantData from "./consultantData";

const ConsultantNew = (props) => {
  const propShape = formStoreData(props, [
    "consultant",
    "supplier",
    "clientandproject",
    "contract",
  ]);

  useEffect(() => {
    return () => {
      propShape.actions.resetSupplierStore();
      propShape.actions.resetConsultantStore();
      propShape.actions.resetContractStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
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
