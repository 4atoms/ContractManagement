import React, { useEffect, useState } from "react";
import { CardTitle, TimeSheetCard } from "./../dashboard.style";
import { Input, InputNumber, Table } from "antd";
import ModalLayout from "Components/modalLayout";
import LaunchIcon from "@material-ui/icons/Launch";
import { primaryColor } from "Theme";

const TimeSheet = ({ store, actions }) => {
  const { activeContractDashboard, analysisQuery } = store;
  const { Search } = Input;

  const [inDebounce, setInDebounce] = useState();
  const [listContract, setListContract] = useState(
    activeContractDashboard?.ongoing
  );

  const [searchInput, setSearchInput] = useState("");

  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    if (!activeContractDashboard) {
      actions.getContractsWithQueryDashboard({ status: "active" });
    }
  }, []);

  useEffect(() => {
    setListContract(activeContractDashboard?.ongoing);
  }, [activeContractDashboard]);

  useEffect(() => {
    setListContract(activeContractDashboard?.ongoing);
    setSearchInput("");
  }, [isModalOpen]);

  const updateLogTime = (id, logTime) => {
    if (logTime != null && logTime >= 0) {
      let request = {
        id: id,
        time_log: logTime,
      };
      actions.updateContractDashboard(request, analysisQuery);
    }
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
    const list = activeContractDashboard?.ongoing.filter((contract) => {
      return (
        contract.consultant.name.toLowerCase().includes(value.toLowerCase()) ||
        contract.project.project_name
          .toLowerCase()
          .includes(value.toLowerCase())
      );
    });
    setListContract(list);
  };

  const timeSheetColumns = [
    {
      title: "Name",
      key: "name",
      dataIndex: ["consultant", "name"],
      render: (text) => <div style={{ color: primaryColor }}>{text}</div>,
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
      render: (text) => <div>SEK {text}</div>,
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

  const onclose = () => {
    setisModalOpen(false);
  };

  const renderTable = (rowCount) => {
    return (
      <Table
        pagination={{
          pageSize: rowCount,
          position: ["bottomLeft"],
          simple: true,
        }}
        loading={listContract == null}
        //   rowSelection={{
        //     type: "checkbox",
        //   }}
        style={{ height: "100%" }}
        dataSource={listContract}
        columns={timeSheetColumns}
      ></Table>
    );
  };
  const renderContent = () => {
    return (
      <TimeSheetCard>
        <div style={{ height: "10%" }}>
          <CardTitle style={{ margin: "5px" }}>
            <div>Timesheet</div>
            <div>
              <Search
                value={searchInput}
                placeholder="search"
                style={{ width: 200 }}
                allowClear
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  filterList(e.target.value);
                }}
              />
              <LaunchIcon
                className="cursorPointer"
                onClick={() => setisModalOpen(true)}
                style={{ margin: "5px 5px 5px 10px" }}
              />
            </div>
          </CardTitle>
        </div>
        <div style={{ height: "88%" }}>{renderTable(4)}</div>
      </TimeSheetCard>
    );
  };

  return (
    <>
      {renderContent()}
      {isModalOpen && (
        <ModalLayout
          width={"700px"}
          height={"550px"}
          title={"Timesheet"}
          searchedValue={filterList}
          onclose={onclose}
        >
          {renderTable(8)}
        </ModalLayout>
      )}
    </>
  );
};

export default TimeSheet;
