import React, { useContext, useEffect } from "react";
import { Table } from "antd";
import styled from "styled-components";
import RefContext from "Utilities/refContext";

const Wrapper = styled.div`
  margin: 50px;
`;

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
  ];
  return (
    <Wrapper>
      <Table
        dataSource={suppliersList}
        columns={columns}
        bordered
        title={() => "SUPPLIERS"}
      ></Table>
    </Wrapper>
  );
};

export default SuppliersData;
