import React, { useContext, useEffect, useState } from "react";
import { Progress } from "antd";
import { Table, Space, Badge, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import RefContext from "Utilities/refContext";
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
      title: "Contract Status",
      key: "contractstatus",
      render: () => (
        <Space size="middle">
          <Badge count={4} className="site-badge-count-4" />
          <Badge
            count={detailOfSupplier.summary?.upcoming?.length}
            className="site-badge-count-4"
          />
          <Badge count={4} className="site-badge-count-4" />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "view",
      render: (supplierssList) => (
        <Space size="middle">
          <EditOutlined onClickCapture={() => handleClick(supplierssList.id)} />
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
            <Table dataSource={suppliersList} columns={columns}></Table>
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
                    format={() =>
                      `${detailOfSupplier?.summary?.upcoming?.length} Upcoming`
                    }
                    strokeColor={"#6CC1FF"}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.expired?.length}  Expired`
                    }
                    strokeColor={"#DB303F"}
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
