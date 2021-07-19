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

  const columns = [
    {
      title: "Consultant Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    // {
    //   title: "Cost Center",
    //   dataIndex: "costCenter",
    //   key: "costCenter",
    // },
    // {
    //   title: "Project Number",
    //   dataIndex: "projectNumber",
    //   key: "projectNumber",
    // },
    // {
    //   title: "Email Address",
    //   dataIndex: "email",
    //   key: "email",
    // },
    // {
    //   title: "Phone Number",
    //   dataIndex: "phoneNumber",
    //   key: "phoneNumber",
    // },
    // {
    //   title: "Start Date",
    //   dataIndex: "startDate",
    //   key: "startDate",
    // },
    // {
    //   title: "End Date",
    //   dataIndex: "endDate",
    //   key: "endDate",
    // },
    // {
    //   title: "IKEA Resp.",
    //   dataIndex: "ikeaResp",
    //   key: "ikeaResp",
    // },
    // {
    //   title: "Supplier Name",
    //   dataIndex: "supplierName",
    //   key: "supplierName",
    // },
    {
      title: "View",
      key: "view",
      render: (consultantsList) => (
        <Space size="middle">
          <a href={"/consultant/" + consultantsList.id}>View</a>
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
