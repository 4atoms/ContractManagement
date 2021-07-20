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
import { useParams } from "react-router-dom";
import { dateFormat } from "../../../utilities/helpers";

const ConsultantDetails = () => {
  const context = useContext(RefContext);

  const {
    store: { detailOfConsultant, detailOfContract },
    actions: { getDetailOfConsulant },
  } = context;

  const { consultantId } = useParams();
  useEffect(() => {
    getDetailOfConsulant(consultantId);
  }, []);
  return (
    <>
      <TitleDiv>CONSULTANT DETAILS</TitleDiv>

      <WrapperD>
        <DisplayLeft>
          <CircularBar />
        </DisplayLeft>
        <DisplayRight></DisplayRight>
        <CardWrapper>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Consultant Summary"
              bordered={false}
              style={{ width: 400 }}
            >
              <tr>
                <td>Name</td>
                <td>{detailOfConsultant.name}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>Role</td>
                <td>{detailOfConsultant.role}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Email</td>
                <td>{detailOfConsultant.email}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Phone No</td>
                <td>{detailOfConsultant.phone}</td>
              </tr>
            </Card>
          </div>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Contract Summary"
              bordered={false}
              style={{ width: 400 }}
            >
              <tr>
                <td>Cost Center</td>
                <td>{detailOfContract.cost_center}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>{dateFormat(detailOfContract.start_date)}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>End Date</td>
                <td>{dateFormat(detailOfContract.end_date)}</td>
              </tr>
              <tr></tr>
              <tr>
                <td>Cost Hour</td>
                <td>{detailOfContract.cost_hour}</td>
              </tr>
            </Card>
          </div>
        </CardWrapper>
      </WrapperD>
    </>
  );
};
export default ConsultantDetails;
