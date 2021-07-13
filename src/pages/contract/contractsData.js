import React, { useContext, useEffect } from "react";
import { Table } from "antd";
import styled from "styled-components";
import RefContext from "Utilities/refContext";

const Wrapper = styled.div`
  margin: 50px;
`;

const ContractsData = () => {
  const context = useContext(RefContext);
  const {
    store: { contractsList },
    actions: { getContractsData },
  } = context;
  useEffect(() => {
    getContractsData();
  }, []);

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
        dataSource={contractsList}
        columns={columns}
        bordered
        title={() => "CONTRACTS"}
      ></Table>
    </Wrapper>
  );
};

export default ContractsData;
