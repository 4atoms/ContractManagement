import React, { useEffect, useState } from "react";
import { CardTitle, TimeSheetCard } from "./../dashboard.style";
import { Input, InputNumber, Table } from "antd";
import ModalLayout from "Components/modalLayout";
import LaunchIcon from "@material-ui/icons/Launch";
import { primaryColor } from "Theme";

const TimeSheet = ({ store, actions }) => {
  const { contractsList } = store;
  const { Search } = Input;

  const [inDebounce, setInDebounce] = useState();
  const [listContract, setListContract] = useState(contractsList);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    if (!contractsList) {
      actions.getContractsData();
    }
  }, []);

  useEffect(() => {
    setListContract(contractsList);
  }, [contractsList]);

  const updateLogTime = (id, logTime) => {
    if (logTime != "" && logTime && logTime >= 0) {
      let request = {
        id: id,
        time_log: logTime,
      };
      actions.updateContract(request);
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
    const list = contractsList.filter((contract) => {
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
    },
    {
      title: "Log Time",
      render: (record) => (
        <InputNumber
          onBlur={() => console.log("onBlur")}
          onChange={(e) => handleChange(record.id, e, updateLogTime)}
        />
      ),
    },
  ];

  const onclose = () => {
    setisModalOpen(false);
  };

  const renderTable = () => {
    return (
      <Table
        pagination={{
          pageSize: 4,
          position: ["bottomLeft"],
          simple: true,
        }}
        //   loading = {listContract === null}
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
                placeholder="search"
                style={{ width: 200 }}
                allowClear
                onChange={(e) => filterList(e.target.value)}
              />
              <LaunchIcon
                className="cursorPointer"
                onClick={() => setisModalOpen(true)}
                style={{ margin: "5px 5px 5px 10px" }}
              />
            </div>
          </CardTitle>
        </div>
        <div style={{ height: "88%" }}>{renderTable()}</div>
      </TimeSheetCard>
    );
  };

  return (
    <>
      {renderContent()}
      {isModalOpen && (
        <ModalLayout title={"Timesheet"} onclose={onclose}>
          {renderTable()}
        </ModalLayout>
      )}
    </>
  );
};

export default TimeSheet;
