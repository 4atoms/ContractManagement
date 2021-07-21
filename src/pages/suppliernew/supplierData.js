import React, { useContext, useEffect } from "react";
import { Table, Space } from "antd";
import { Progress } from "antd";
import RefContext from "Utilities/refContext";
import { useHistory } from "react-router-dom";
import {
  CardRight,
  CardLeft,
  WrapperCard,
  SpaceBar,
  CircularBarsContainer,
} from "Components/common.style";
import { TitleDiv } from "../../components/common.style";

const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList },
    actions: { getSupplierData, setId },
  } = context;
  return (
    <>
      <WrapperCard>
        {/* <CardLeft></CardLeft> */}
        <CardRight>
          <div>Supplier</div>
          <div>CompanyId</div>
          <
          <CircularBarsContainer>
            <SpaceBar />
            <Progress
              type="circle"
              percent={100}
              width={110}
              format={() => "2  Ongoing"}
              strokeColor={"#8FC827"}
            />
            <SpaceBar />
            <Progress
              type="circle"
              percent={100}
              width={110}
              format={() => "2  To Renew"}
              strokeColor={"#FF7A00"}
            />
            <SpaceBar />
            <Progress
              type="circle"
              percent={100}
              width={110}
              format={() => "1  Upcoming"}
              strokeColor={"#6CC1FF"}
            />
            <SpaceBar />
            <Progress
              type="circle"
              percent={100}
              width={110}
              format={() => "4  Expired"}
              strokeColor={"#DB303F"}
            />
            <SpaceBar />
          </CircularBarsContainer>
        </CardRight>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
