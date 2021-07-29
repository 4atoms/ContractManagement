import React, { useEffect, useState } from "react";
import { CardTitle, TimeSheetCard } from "./../dashboard.style";
import { Input, InputNumber, Table } from "antd";

const TimeSheet = ({ store, actions }) => {
  const { contractsList } = store;
  const { Search } = Input;

  const [inDebounce, setInDebounce] = useState();
  const [listContract, setListContract] = useState(contractsList);

  useEffect(() => {
    if (!contractsList) {
      actions.getContractsData();
    }
  }, []);

  useEffect(() => {
    setListContract(contractsList);
  }, [contractsList]);

  const updateLogTime = (id, logTime) => {
    let request = {
      id: id,
      time_log: logTime,
    };
    actions.updateContract(request);
  };

  const handleChange = (id, value, callBack) => {
    clearTimeout(inDebounce);
    setInDebounce(
      setTimeout(() => {
        callBack(id, value);
      }, 1500)
    );
  };
  const filterList = (value) => {
    const list = contractsList.filter((contract) => {
      return (
        contract.consultant.name.toLowerCase().includes(value.toLowerCase()) ||
        contract.project.project_name
          .toLowerCase()
          .includes(value.toLowerCase())
      );
    });
    console.log(list);
    setListContract(list);
  };

  const timeSheetColumns = [
    {
      title: "Name",
      key: "name",
      dataIndex: ["consultant", "name"],
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Project",
      dataIndex: ["project", "project_name"],
      key: "project",
    },
    {
      title: "Cost center",
      key: "cost_center",
      dataIndex: "cost_center",
    },

    {
      title: "Cost / hr",
      dataIndex: "cost_per_hour",
      key: "cost_per_hour",
    },
    {
      title: "Log Time",
      render: (record) => (
        <InputNumber
          onChange={(e) => handleChange(record.id, e, updateLogTime)}
        />
      ),
    },
  ];

  return (
    <TimeSheetCard>
      <div style={{ height: "10%" }}>
        <CardTitle style={{ margin: "5px" }}>
          <div>Timesheet</div>
          <div>
            <Search
              placeholder="search"
              style={{ width: 200 }}
              allowClear
              onChange={(e) => filterList(e.target.value)}
            />
          </div>
        </CardTitle>
      </div>
      <div style={{ height: "85%" }}>
        <Table
          pagination={{
            pageSize: 4,
          }}
          //   loading = {listContract === null}
          position={["bottomRight"]}
          //   rowSelection={{
          //     type: "checkbox",
          //   }}
          style={{ height: "100%" }}
          dataSource={listContract}
          columns={timeSheetColumns}
        ></Table>
      </div>
    </TimeSheetCard>
  );
};

export default TimeSheet;
