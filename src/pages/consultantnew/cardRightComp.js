import React from "react";
import { Progress, Table, Input, Badge } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardRight,
  DisplayCardRight3,
  RightCardContent,
  SupplierName,
  SupplierId,
  Line1,
  Contracts,
  CircularBarsContainer,
  Circle,
  CircleText,
  CircleNumber,
  SpaceBar,
  Consultants,
  CTitle,
  Tags,
  PointOfContacts,
  EmailMobileSupplier,
  Email,
  Mobile,
  Supplier,
  ConsultantName,
  ActiveUpcomingExpiredContract,
  ActiveContractParts,
  ActiveContractSubParts,
  UpcomingContractParts,
  UpcomingContractSubParts,
  LightColor,
} from "Components/common.style";
import { themeColors } from "Config/theme";
import { dateFormatStandard } from "../../utilities/helpers";
const CardRightComp = (props) => {
  const columns2 = [
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Organization No",
      dataIndex: "organization_no",
      key: "organization_no",
    },
  ];
  return (
    <CardRight>
      <DisplayCardRight3 displayConsultDetails={props.displayConsultDetails}>
        <RightCardContent>
          <ConsultantName>
            {props.detailOfConsultant.name}
            <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span>
          </ConsultantName>
          {/* <Consultants></Consultants> */}
          <EmailMobileSupplier>
            <Email>
              <LightColor>
                <text>Email</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant.email}</text>
              </div>
            </Email>
            <Mobile>
              <LightColor>
                <text>Mobile</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant.phone}</text>
              </div>
            </Mobile>
            <Supplier>
              <LightColor>
                <text>Supplier</text>
              </LightColor>
              <div>
                <text>ABC</text>
              </div>
            </Supplier>
          </EmailMobileSupplier>
          <Line1 />

          {/* Active Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="success" />
            <text>Active Contract</text>
          </ActiveUpcomingExpiredContract>
          <ActiveContractParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Client</text>
              </LightColor>
              <div>
                <text>{ props.detailOfConsultant?.contracts?.active?.[0]?.client?.name }</text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Project</text>
              </LightColor>
              <div>
                <text>
                  {
                    props.detailOfConsultant.contracts?.active?.[0].project
                      ?.project_name
                  }
                </text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Role</text>
              </LightColor>
              <div>
                <text>
                  {props.detailOfConsultant.contracts?.active?.[0].role}
                </text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Cost Center</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant.location}</text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Start Date</text>
              </LightColor>
              <div>
                <text>
                  {dateFormatStandard(props.detailOfConsultant.contracts?.active?.[0].start_date)}
                </text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>End Date</text>
              </LightColor>
              <div>
                <text>
                  {dateFormatStandard(
                    props.detailOfConsultant.contracts?.active?.[0].end_date
                  )}
                </text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Cost/hr</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant.contracts?.active?.[0].cost_per_hour}</text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts></ActiveContractSubParts>
          </ActiveContractParts>
          <Line1 />

          {/* Upcoming Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="processing" />
            <text>Upcoming Contract</text>
          </ActiveUpcomingExpiredContract>
          <UpcomingContractParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Client</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Project</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Role</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Cost Center</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Start Date</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>End Date</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Cost/hr</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <button>Cancel</button>
            </UpcomingContractSubParts>
          </UpcomingContractParts>
          <Line1 />

          {/* Expired Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="error" />
            <text>Expired Contract</text>
            <Table
              dataSource={props.detailOfConsultant.contracts?.expired}
              pagination={{ position: ["none", "none"] }}
              showHeader={false}
              columns={columns2}
            ></Table>
          </ActiveUpcomingExpiredContract>
        </RightCardContent>
      </DisplayCardRight3>
    </CardRight>
  );
};

export default CardRightComp;
