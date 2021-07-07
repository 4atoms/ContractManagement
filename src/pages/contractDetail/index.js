import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import Header from "Components/Header";

const ContractDetail = (props) => {
  const propShape = formStoreData(props, ["contractDetail"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetContractDetailStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Header />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

ContractDetail.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default ContractDetail;
