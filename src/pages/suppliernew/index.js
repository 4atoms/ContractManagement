import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import SupplierData from "./supplierData";

const SupplierNew = (props) => {
  const propShape = formStoreData(props, ["supplier"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetSupplierStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <SupplierData />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

SupplierNew.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default SupplierNew;
