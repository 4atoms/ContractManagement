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

const SupplierDetails = () => {
  const context = useContext(RefContext);
  const {
    store: { detailOfSupplier },
    actions: { getDetailOfSupplier },
  } = context;

  const { supplierId } = useParams();
  console.log(supplierId);
  useEffect(() => {
    getDetailOfSupplier(supplierId);
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
                <td>{detailOfSupplier.name}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>Point of Contact</td>
                <td>{detailOfSupplier.point_of_contacts?.[0]?.name}</td>
              </tr>
              <tr></tr>
              {/* <tr>
                <td>Email</td>
                <td>{detailOfSupplier.point_of_contacts?.[0]?.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{detailOfSupplier.point_of_contacts?.[0]?.phone}</td>
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
export default SupplierDetails;
