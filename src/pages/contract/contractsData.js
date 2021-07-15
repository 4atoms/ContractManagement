import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Space } from "antd";
import RefContext from "Utilities/refContext";
import { TableTitle, TableWrap, Wrapper } from "../../components/common.style";

const ContractsData = () => {
  const context = useContext(RefContext);
  const {
    store: { contractsList },
    actions: { getContractsData },
  } = context;
  let history = useHistory();
  const handleClick = () => {
    history.push("/contract1");
  };
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
    {
      title: "View",
      key: "view",
      render: () => (
        <Space size="middle">
          <a onClickCapture={handleClick}>View</a>
        </Space>
      ),
    },
  ];
  return (
    <Wrapper>
      <TableWrap>
        <TableTitle>CONTRACTS</TableTitle>
        <Table dataSource={contractsList} columns={columns}></Table>
      </TableWrap>
    </Wrapper>
  );
};

export default ContractsData;
