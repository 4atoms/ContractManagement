import React, { useContext, useEffect } from "react";
import RefContext from "Utilities/refContext";
import {
  DisplayLeft,
  DisplayRight,
  TitleDiv,
  WrapperD,
  CardWrapper,
} from "../../../components/common.style";
import CircularBar from "../../../components/circularBar";
import { Progress, Card } from "antd";
import { useParams } from "react-router-dom";

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
        <DisplayRight>
          <Progress percent={77} style={{ height: "50px" }} />
        </DisplayRight>
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
                <td>Accenture</td>
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

