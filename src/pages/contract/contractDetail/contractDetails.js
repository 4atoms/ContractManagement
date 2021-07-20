import React, { useContext, useEffect } from "react";
import RefContext from "Utilities/refContext";
import { Card } from "antd";
import {
  DisplayLeft,
  DisplayRight,
  TitleDiv,
  WrapperD,
  CardWrapper,
} from "Components/common.style";
import CircularBar from "Components/circularBar";
import { useParams } from "react-router-dom";
import { dateFormat } from "Utilities/helpers";

const ContractDetails = () => {
  const context = useContext(RefContext);
  const {
    store: { detailOfContract },
    actions: { getDetailOfcontract },
  } = context;

  const { contractId } = useParams();
  console.log(contractId);

  useEffect(() => {
    getDetailOfcontract(contractId);
  }, []);
  return (
    <>
      <TitleDiv>CONTRACT DETAILS</TitleDiv>

      <WrapperD>
        <DisplayLeft>
          <CircularBar />
        </DisplayLeft>
        <DisplayRight></DisplayRight>
        <CardWrapper>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Contract Summary"
              bordered={false}
              style={{ width: 400 }}
            >
              <tr>
                <td>Name</td>
                <td>{detailOfContract.id}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>Role</td>
                <td>Product Specialist</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Supplier</td>
                <td>{dateFormat("2021-08-20T00:00:00.000Z")}</td>
              </tr>
              {/* <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p> */}
            </Card>
          </div>
        </CardWrapper>
      </WrapperD>
    </>
  );
};
export default ContractDetails;
