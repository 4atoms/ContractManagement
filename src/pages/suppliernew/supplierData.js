import React, { useContext, useEffect } from "react";
import { Table, Space, Card, Badge, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; 
import RefContext from "Utilities/refContext";
import { useHistory } from "react-router-dom";
import {
  CardRight,
  CardLeft,
  WrapperCard,
  TableWrap,
  Card1Header,
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
          <EditOutlined onClickCapture={() => handleClick(supplierssList.id)}/>
          <DeleteOutlined onClick={() => console.log("Delete Clicked")} />
          {/* <a onClickCapture={() => handleClick(supplierssList.id)}>View</a> */}
        </Space>
      ),
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
        <CardRight></CardRight>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
