import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import RefContext from "Utilities/refContext";
import {} from "@material-ui/icons";
import {
  CardLeft,
  WrapperCard,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
} from "Components/common.style";
import { themeColors } from "Config/theme";
import CardRightComp from "./cardRightComp";

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
            count={detailOfSupplier.summary?.upcoming?.length}
            showZero
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
          <CardRightComp
            detailOfSupplier={detailOfSupplier}
            displayDetails={displayDetails}
          />
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
