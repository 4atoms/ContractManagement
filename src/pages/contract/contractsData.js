import React, { useContext } from "react";
import { Table } from "antd";
import styled from "styled-components";
import RefContext from "Utilities/refContext";

const Wrapper = styled.div`
  margin: 50px;
`;

const ContractsData = () => {
  const context = useContext(RefContext);
  const {
    store: data,
    actions: { assignToContractStore, getContractData },
  } = context;
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     role: "Product Specialist",
  //     costCenter: "CC 1503",
  //     projectNumber: "PJ_DAM",
  //     startDate: "12-02-20",
  //     endDate: "11-02-21",
  //     ikeaResp: "Jonatan Soderdinf",
  //     supplier: "Accenture",
  //     costPHour: "625 kr",
  //   },
  //   {
  //     key: "2",
  //     name: "Drake",
  //     role: "Product Specialist",
  //     costCenter: "CC 1503",
  //     projectNumber: "PJ_PIM",
  //     startDate: "12-02-20",
  //     endDate: "11-02-21",
  //     ikeaResp: "Abhishek Kumar",
  //     supplier: "Accenture",
  //     costPHour: "668 kr",
  //   },
  //   {
  //     key: "3",
  //     name: "Drake",
  //     role: "Product Specialist",
  //     costCenter: "CC 1503",
  //     projectNumber: "PJ_CMS",
  //     startDate: "12-02-20",
  //     endDate: "11-02-21",
  //     ikeaResp: "Abhishek Kumar",
  //     supplier: "Infosys",
  //     costPHour: "575 kr",
  //   },
  // ];
  assignToContractStore("data", getContractData());

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
    {
      title: "Prolong FY22",
      dataIndex: "prolongFY22",
      key: "prolongFY22",
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "Cost/ hour SEK",
      dataIndex: "costPHour",
      key: "costPHour",
    },
    {
      title: "Extend Contract",
      dataIndex: "extendContract",
      key: "extendContract",
    },
    {
      title: "Contract Value",
      dataIndex: "contractValue",
      key: "contractValue",
    },
  ];
  return (
    <Wrapper>
      <Table
        dataSource={data}
        columns={columns}
        bordered
        title={() => "CONTRACTS"}
      ></Table>
    </Wrapper>
  );
};

export default ContractsData;
