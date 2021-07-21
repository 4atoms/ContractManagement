import React, { useContext, useEffect, useState } from "react";
import { Progress } from "antd";
import { Table, Space, Card, Badge, Button } from "antd";
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
  Contracts,
  SupplierName,
  SupplierId,
  Line1,
  PointOfContacts,
  TableWrap,
  Card1Header,
} from "Components/common.style";

const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier },
    actions: { getSupplierData, setId, getDetailOfSupplier },
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
          <Badge count={0} className="site-badge-count-4" />
          <Badge
            count={detailOfSupplier.summary?.upcoming?.length}
            className="site-badge-count-4"
          />
          <Badge count={0} className="site-badge-count-4" />
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
        <CardLeft>
          <div className="site-card-border-less-wrapper">
            <Card>
              <Card1Header>
                <text>Suppliers</text>
                <Button type="primary" shape="circle">
                  +
                </Button>
              </Card1Header>
              {/* title="SUPPLIERS" bordered={true} */}
              {/* <TableWrap></TableWrap> */}
              {/* <TableTitle>SUPPLIERS</TableTitle> */}
              <Table dataSource={suppliersList} columns={columns}></Table>
            </Card>
          </div>
        </CardLeft>
        <CardRight>
          <DisplayCardRight displayDetails={displayDetails}>
            <RightCardContent>
              <SupplierName>{detailOfSupplier.name}</SupplierName>
              <SupplierId>{detailOfSupplier.id}</SupplierId>
              <Line1 />
              <Contracts>Contracts</Contracts>
              <CircularBarsContainer>
                <SpaceBar />
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
                <SpaceBar />
              </CircularBarsContainer>
              <Consultants>
                <div>Consultants ({detailOfSupplier.consultants?.length})</div>
                <div>
                  {detailOfSupplier.consultants?.map((x) => {
                    return <div key={x.id}>{x.name}</div>;
                  })}
                </div>
              </Consultants>
              <PointOfContacts>Point of Contacts</PointOfContacts>
              <Table
                dataSource={detailOfSupplier.point_of_contacts}
                columns={columns2}
              ></Table>
            </RightCardContent>
          </DisplayCardRight>
        </CardRight>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
