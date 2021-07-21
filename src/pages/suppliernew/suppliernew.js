import React, { useContext, useEffect } from "react";
import { Table, Space, Card, Badge, Button } from "antd";
import RefContext from "Utilities/refContext";
import { useHistory } from "react-router-dom";
import { TableTitle, TableWrap, Wrapper } from "Components/common.style";

const SuppliersData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList },
    actions: { getSupplierData, setId },
  } = context;
  let history = useHistory();

  const handleClick = (num) => {
    setId(num);
    history.push(`/supplier/${num}`);
  };
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
    <Wrapper>
      <div className="site-card-border-less-wrapper">
        <Card style={{ width: 800 }}>
          <div>
            <text>Suppliers</text>
            <Button type="primary" shape="circle">
              +
            </Button>
          </div>
          {/* title="SUPPLIERS" bordered={true} */}
          <TableWrap>
            {/* <TableTitle>SUPPLIERS</TableTitle> */}
            <Table dataSource={suppliersList} columns={columns}></Table>
          </TableWrap>
        </Card>
      </div>
    </Wrapper>
  );
};

export default SuppliersData;
