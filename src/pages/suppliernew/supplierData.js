import React, { useContext, useEffect } from "react";
import { Progress } from "antd";
import { Table, Space, Card, Badge, Button } from "antd";
import RefContext from "Utilities/refContext";
import { useHistory } from "react-router-dom";
import {
  CardRight,
  CardLeft,
  WrapperCard,
  SpaceBar,
  CircularBarsContainer,
} from "Components/common.style";

const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList },
    actions: { getSupplierData, setId },
  } = context;

  useEffect(() => {
    getSupplierData();
  }, []);

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
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    // },
    // {
    //   title: "Phone Number",
    //   dataIndex: "phone",
    //   key: "phone",
    // },
    {
      title: "Contract Status",
      key: "contractstatus",
      render: () => (
        <Space size="middle">
          <Badge count={4} className="site-badge-count-4" />
          <Badge count={4} className="site-badge-count-4" />
          <Badge count={4} className="site-badge-count-4" />
        </Space>
      ),
    },
    {
      title: "View",
      key: "view",
      render: (supplierssList) => (
        <Space size="middle">
          <a onClickCapture={() => handleClick(supplierssList.id)}>View</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <WrapperCard>

      <CardLeft>
          <div className="site-card-border-less-wrapper">
            <Card style={{ width: 800 }}>
              <text>Suppliers</text>
              <Button type="primary" shape="circle">
                +
              </Button>
              {/* title="SUPPLIERS" bordered={true} */}
              {/* <TableWrap></TableWrap> */}
              {/* <TableTitle>SUPPLIERS</TableTitle> */}
              <Table dataSource={suppliersList} columns={columns}></Table>
            </Card>
          </div>
        </CardLeft>
        <CardRight>
          <div>Supplier</div>
          <div>CompanyId</div>
          <div>Contracts</div>
          <CircularBarsContainer>
            <SpaceBar />
            <Progress
              type="circle"
              percent={100}
              width={110}
              format={() => "2  Ongoing"}
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
              format={() => "1  Upcoming"}
              strokeColor={"#6CC1FF"}
            />
            <SpaceBar />
            <Progress
              type="circle"
              percent={100}
              width={110}
              format={() => "4  Expired"}
              strokeColor={"#DB303F"}
            />
            <SpaceBar />
          </CircularBarsContainer>
        </CardRight>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
