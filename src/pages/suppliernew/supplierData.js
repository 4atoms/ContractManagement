import React, { useContext, useEffect, useState } from "react";
import { Progress } from "antd";
import { Table, Space, Badge, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import RefContext from "Utilities/refContext";
import {} from "@material-ui/icons";
import {
  CardRight,
  CardLeft,
  WrapperCard,
  SpaceBar,
  CircularBarsContainer,
  DisplayCardRight,
  RightCardContent,
  Consultants,
  CTitle,
  Contracts,
  SupplierName,
  SupplierId,
  Line1,
  PointOfContacts,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
  Tags,
} from "Components/common.style";
import { themeColors } from "Config/theme";

const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier },
    actions: { getSupplierData, getDetailOfSupplier },
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    getSupplierData();
  }, []);

  const showDetails = () => {
    setDisplayDetails(true);
  };
  const handleClick = (num) => {
    getDetailOfSupplier(num);
    showDetails();
  };

  const columns = [
    {
      title: "Supplier Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Total Consultants",
      key: "totalconsultants",
      render: () => (
        <Space size="middle">{suppliersList[0].consultants.length}</Space>
      ),
    },
    {
      title: <div style={{ color: "red" }}>Status</div>,
      key: "contractstatus",
      render: () => (
        <Space size="middle">
          <Badge count={0} showZero />
          <Badge
            count={detailOfSupplier.summary?.upcoming?.length} showZero
            className="site-badge-count-4"
          />
          <Badge count={4} showZero className="site-badge-count-4" />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "view",
      render: (supplierssList) => (
        <Space size="middle">
          <EditOutlined onClickCapture={() => handleClick(supplierssList.id)} />
          {/* <span className="material-icons">asbsabn</span> */}
          <DeleteOutlined onClick={() => console.log("Delete Clicked")} />
          {/* <a onClickCapture={() => handleClick(supplierssList.id)}>View</a> */}
        </Space>
      ),
    },
  ];
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
    <>
      <WrapperCard>
        <CardLeftWrapper>
          <CardLeft>
            <Card1Header>
              <text>Suppliers</text>
              <Button type="primary" shape="circle">
                +
              </Button>
            </Card1Header>
            <Table
              dataSource={suppliersList}
              columns={columns}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    handleClick(record.id);
                  },
                };
              }}
            ></Table>
          </CardLeft>
        </CardLeftWrapper>

        <CardRightWrapper>
          <CardRight>
            <DisplayCardRight displayDetails={displayDetails}>
              <RightCardContent>
                <SupplierName>{detailOfSupplier.name}</SupplierName>
                <SupplierId>{detailOfSupplier.id}</SupplierId>
                <Line1 />
                <Contracts>Contracts</Contracts>

                <CircularBarsContainer>
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.ongoing?.length}  Ongoing`
                    }
                    strokeColor={themeColors.greenSuccess}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() => "2  To Renew"}
                    strokeColor={themeColors.orangeWarning}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.upcoming?.length} Upcoming`
                    }
                    strokeColor={themeColors.blueInfo}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.expired?.length}  Expired`
                    }
                    strokeColor={themeColors.redDanger}
                  />
                </CircularBarsContainer>
                <Consultants>
                  <CTitle>
                    Consultants ({detailOfSupplier.consultants?.length})
                  </CTitle>
                  <Tags>
                    {detailOfSupplier.consultants?.map((x) => {
                      return <div key={x.id}>{x.name}</div>;
                    })}
                  </Tags>
                </Consultants>
                <PointOfContacts>Point of Contacts</PointOfContacts>
                <Table
                  dataSource={detailOfSupplier.point_of_contacts}
                  pagination={{ position: ["none", "none"] }}
                  columns={columns2}
                ></Table>
              </RightCardContent>
            </DisplayCardRight>
          </CardRight>
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
