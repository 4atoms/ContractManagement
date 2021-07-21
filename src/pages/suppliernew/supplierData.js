import React, { useContext, useEffect } from "react";
import { Table, Space } from "antd";
import RefContext from "Utilities/refContext";
import { useHistory } from "react-router-dom";
import { CardRight, CardLeft, WrapperCard } from "Components/common.style";

const SupplierData = () => {
  return (
    <>
      <WrapperCard>
        <CardLeft></CardLeft>
        <CardRight></CardRight>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
