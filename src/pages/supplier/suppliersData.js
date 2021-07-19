import React, { useContext, useEffect } from "react";
import { Table, Space } from "antd";
import RefContext from "Utilities/refContext";
import { useHistory } from "react-router-dom";
import { TableTitle, TableWrap, Wrapper } from "../../components/common.style";

const SuppliersData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList },
    actions: { getSupplierData },
  } = context;
  let history = useHistory();
  const handleClick = (num) => {
    console.log(num);
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
      render: (supplierList) => (
        <Space size="middle">
          <a onClickCapture={() => handleClick(supplierList.id)}>View</a>
        </Space>
      ),
    },
  ];
  return (
    <Wrapper>
      <TableWrap>
        <TableTitle>SUPPLIERS</TableTitle>
        <Table dataSource={suppliersList} columns={columns}></Table>
      </TableWrap>
    </Wrapper>
  );
};

export default SuppliersData;
