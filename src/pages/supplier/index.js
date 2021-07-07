import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";

import SuppliersData from './suppliersData';

const SupplierList = (props) => {
  const propShape = formStoreData(props, ["supplier"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetHomeStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <div>Hello Supplier</div>
          <SuppliersData />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

SupplierList.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default SupplierList;
