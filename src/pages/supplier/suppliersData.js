import React, { useContext } from "react";
import { Table } from "antd";
import styled from "styled-components";
import RefContext from "Utilities/refContext";

const Wrapper = styled.div`
  margin: 50px;
`;

const SuppliersData = () => {
  const context = useContext(RefContext);
  const {
    store: data,
    // actions: { assignToSupplierStore, getSupplierData },
  } = context;
  // const dataSource = [
  //   {
  //     key: "1",
  //     supplier: "Accenture",
  //     contactPersonNumber: "9999772311",
  //     phoneNumber: "9999772300",
  //     companyId: "625kr",
  //   },
  // ];
  // assignToSupplierStore("data", getSupplierData());
  console.log(data.data[0]);

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
        dataSource={data.data}
        columns={columns}
        bordered
        title={() => "SUPPLIERS"}
      ></Table>
    </Wrapper>
  );
};

export default SuppliersData;
