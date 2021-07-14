import React, { useContext, useEffect } from "react";
import RefContext from "Utilities/refContext";

const ContractDetails = () => {
  const context = useContext(RefContext);
  const {
    store: { contractDetails },
    actions: { getContractDetail },
  } = context;
  useEffect(() => {
    getContractDetail();
  }, []);
  return (
    <div>
      {contractDetails.map((x) => {
        return <div key={x.key}>Name:{x.name}</div>;
      })}
    </div>
  );
};
export default ContractDetails;
