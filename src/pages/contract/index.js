import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import Header from "Components/Header";
import ContractsData from "./contractsData";

const ContractList = (props) => {
  const propShape = formStoreData(props, ["contract"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetContractStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Header/>
          <ContractsData />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

ContractList.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default ContractList;
