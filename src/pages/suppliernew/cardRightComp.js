import React from "react";
import { Progress, Table } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardRight,
  DisplayCardRight,
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
} from "Components/common.style";
import { themeColors } from "Config/theme";
const CardRightComp = (props) => {
  const columns2 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Number",
      dataIndex: "phone",
      key: "phone",
    },
  ];
  return (
    <CardRight>
      <DisplayCardRight displayDetails={props.displayDetails}>
        <RightCardContent>
          <SupplierName>
            {props.detailOfSupplier.name}
            <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span>
          </SupplierName>
          <SupplierId>{props.detailOfSupplier.organization_no}</SupplierId>
          <Line1 />
          <Contracts>Contracts</Contracts>

          <CircularBarsContainer>
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                style={{ maxWidth: "100%" }}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.ongoing}
                    </CircleNumber>
                    <CircleText>Ongoing</CircleText>
                  </div>
                )}
                strokeColor={themeColors.greenSuccess}
              />
            </Circle>
            <SpaceBar />
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                style={{ maxWidth: "100%" }}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.to_be_renew}
                    </CircleNumber>
                    <CircleText>To Renew</CircleText>
                  </div>
                )}
                strokeColor={themeColors.orangeWarning}
              />
            </Circle>
            <SpaceBar />
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                style={{ maxWidth: "100%" }}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.upcoming}
                    </CircleNumber>
                    <CircleText>Upcoming</CircleText>
                  </div>
                )}
                strokeColor={themeColors.blueInfo}
              />
            </Circle>
            <SpaceBar />
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.expired}
                    </CircleNumber>
                    <CircleText>Expired</CircleText>
                  </div>
                )}
                strokeColor={themeColors.redDanger}
              />
            </Circle>
          </CircularBarsContainer>
          <Consultants>
            <CTitle>
              Consultants ({props.detailOfSupplier.consultants?.length})
            </CTitle>
            <Tags>
              {props.detailOfSupplier.consultants?.map((x) => {
                return <div key={x.id}>{x.name}</div>;
              })}
            </Tags>
          </Consultants>
          <PointOfContacts>
            <div>Point of Contacts</div>
            <Table
              dataSource={props.detailOfSupplier.point_of_contacts}
              pagination={{ position: ["none", "none"] }}
              columns={columns2}
            ></Table>
          </PointOfContacts>
        </RightCardContent>
      </DisplayCardRight>
    </CardRight>
  );
};

export default CardRightComp;
