import React, { useContext, useEffect, useState } from "react";
import { Progress } from "antd";
import { Table, Space, Card, Badge, Button } from "antd";
import RefContext from "Utilities/refContext";
import {
  CardRight,
  CardLeft,
  WrapperCard,
  SpaceBar,
  CircularBarsContainer,
  DisplayCardRight,
  Consultants,
  Contracts,
  SupplierName,
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
    console.log(detailOfSupplier.consultants);
    showDetails();
  };

  const columns = [
    {
      title: "Supplier Name",
      dataIndex: "name",
      key: "name",
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
          <DisplayCardRight displayDetails={displayDetails}>
            <SupplierName>{detailOfSupplier.name}</SupplierName>
            <div>{detailOfSupplier.id}</div>
            <div>Contracts</div>
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
              <p>
                {detailOfSupplier.consultants?.map((x) => {
                  return <span key={x.id}>{x.name}</span>;
                })}
              </p>
            </Consultants>
            <div>Point of Contacts</div>
            <Table
              dataSource={detailOfSupplier.point_of_contacts}
              columns={columns2}
            ></Table>
          </DisplayCardRight>
        </CardRight>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
