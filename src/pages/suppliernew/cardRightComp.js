import React from "react";
import { Progress, Table } from "antd";
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
          <SupplierName>{props.detailOfSupplier.name}</SupplierName>
          <SupplierId>xxyyzzzz01</SupplierId>
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
                      {props.detailOfSupplier?.summary?.ongoing?.length}
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
                    <CircleNumber>2</CircleNumber>
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
                      {props.detailOfSupplier?.summary?.upcoming?.length}
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
                      {props.detailOfSupplier?.summary?.expired?.length}
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
          <PointOfContacts>Point of Contacts</PointOfContacts>
          <Table
            dataSource={props.detailOfSupplier.point_of_contacts}
            pagination={{ position: ["none", "none"] }}
            columns={columns2}
          ></Table>
        </RightCardContent>
      </DisplayCardRight>
    </CardRight>
  );
};

export default CardRightComp;
