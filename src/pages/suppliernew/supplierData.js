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
  Consultants,
  Contracts,
  SupplierName,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
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
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
