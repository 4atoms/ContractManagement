import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Space } from "antd";
import RefContext from "Utilities/refContext";
import { TableTitle, TableWrap, Wrapper } from "Components/common.style";

const ContractsData = () => {
  const context = useContext(RefContext);
  const {
    store: { contractsList, upcomingContractsList, expiredContractsList },
    actions: { getContractsData },
  } = context;
  let history = useHistory();
  const handleClick = (num) => {
    history.push(`/consultant/${num}`);
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
    // {
    //   title: "Role",
    //   dataIndex: "role",
    //   key: "role",
    // },
    {
      title: "Cost Center",
      dataIndex: "cost_center",
      key: "cost_center",
    },
    {
      title: "Project Number",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
    {
      title: "Prolong FY22",
      dataIndex: "prolong_FY22",
      key: "prolong_FY22",
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "Cost/ hour SEK",
      dataIndex: "cost_hour",
      key: "cost_hour",
    },
    {
      title: "View",
      key: "view",
      render: (contractList) => (
        <Space size="middle">
          <a onClickCapture={() => handleClick(contractList.consultant.id)}>
            View
          </a>
        </Space>
      ),
    },
  ];
  return (
    <Wrapper>
      <TableWrap>
        <TableTitle>CONTRACTS</TableTitle>
        <div>Ongoing</div>
        <Table dataSource={contractsList} columns={columns}></Table>
        <div>Upcoming</div>
        <Table dataSource={upcomingContractsList} columns={columns}></Table>
        <div>Expired</div>
        <Table dataSource={expiredContractsList} columns={columns}></Table>
      </TableWrap>
      <div>{console.log("test", context.store)}</div>
    </Wrapper>
  );
};

export default ContractsData;
