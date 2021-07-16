import React, { useContext, useEffect } from "react";
import { Table, Space } from "antd";
import RefContext from "Utilities/refContext";
import { TableTitle, TableWrap, Wrapper } from "../../components/common.style";

const ConsultantsData = () => {
  const context = useContext(RefContext);
  const {
    store: { consultantsList },
    actions: { getConsultantsData },
  } = context;
  useEffect(() => {
    getConsultantsData();
  }, []);
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     role: "Product Specialist",
  //     costCenter: "CC 1503",
  //     projectNumber: "PJ_DAM",
  //     email: "abc@xyz.com",
  //     phoneNumber: "9999772311",
  //     startDate: "12-02-20",
  //     endDate: "11-02-21",
  //     ikeaResp: "Jonatan Soderdinf",
  //     supplier: "Accenture",
  //     supplierTags: ["working"],
  //   },
  //   {
  //     key: "2",
  //     name: "Drake",
  //     role: "Product Specialist",
  //     costCenter: "CC 1503",
  //     projectNumber: "PJ_DAM",
  //     email: "abc@xyz.com",
  //     phoneNumber: "9999772300",
  //     startDate: "12-02-20",
  //     endDate: "11-02-21",
  //     ikeaResp: "Jonatan Soderdinf",
  //     supplier: "Accenture",
  //     supplierTags: ["working"],
  //   },
  // ];

  const columns = [
    {
      title: "ConsultantName",
      dataIndex: "consultantName",
      key: "consultantName",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Cost Center",
      dataIndex: "costCenter",
      key: "costCenter",
    },
    {
      title: "Project Number",
      dataIndex: "projectNumber",
      key: "projectNumber",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "IKEA Resp.",
      dataIndex: "ikeaResp",
      key: "ikeaResp",
    },
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
      key: "supplierName",
    },
    {
      title: "View",
      key: "view",
      render: () => (
        <Space size="middle">
          <a>View</a>
        </Space>
      ),
    },
  ];
  return (
    <Wrapper>
      <TableWrap>
        <TableTitle>CONSULTANTS</TableTitle>
        <Table dataSource={consultantsList} columns={columns}></Table>
      </TableWrap>
    </Wrapper>
  );
};

export default ConsultantsData;
