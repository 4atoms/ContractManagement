import React, { useContext, useEffect } from "react";
import { Table, Space, Card } from "antd";
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
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
        <Card title="SUPPLIERS" bordered={true} style={{ width: 800 }}>
          {/* <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p> */}
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
