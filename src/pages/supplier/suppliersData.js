import React, { useContext, useEffect } from "react";
import { Table, Space } from "antd";
import RefContext from "Utilities/refContext";
import { TableTitle, TableWrap, Wrapper } from "../../components/common.style";

const SuppliersData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList },
    actions: { getSupplierData },
  } = context;
  useEffect(() => {
    getSupplierData();
  }, []);
  // resetSupplierStore();
  console.log("check", suppliersList);

  const columns = [
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
      key: "supplierName",
    },
    {
      title: "Contact Person",
      dataIndex: "contactPerson",
      key: "contactPerson",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Company ID",
      dataIndex: "companyId",
      key: "companyId",
    },
    {
      title: "View",
      key: "view",
      render: (text, record) => (
        <Space size="middle">
          <a>View{record.name}</a>
          <a>Delete</a>
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
