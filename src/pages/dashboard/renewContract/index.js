import React, { useEffect, useState } from "react";
import {
  CardTitle,
  RenewableCard,
  CollectionName,
  Button,
} from "./../dashboard.style";
import { Input, Table, Select, DatePicker } from "antd";
import {
  dateFormat,
  dateDifference,
  dateFormatStandard2,
} from "Utilities/helpers";
import ModalLayout from "Components/modalLayout";

import CachedIcon from "@material-ui/icons/Cached";
import LaunchIcon from "@material-ui/icons/Launch";

import { primaryColor, themeColors } from "Theme";

import moment from "moment";

const RenewContract = ({ store, actions }) => {
  const { renewContractDashboard } = store;
  const { Search } = Input;
  const { Option } = Select;

  const [listContract, setListContract] = useState(
    renewContractDashboard?.ongoing || null
  );
  const [dataSetSource, setDataSetSource] = useState(
    renewContractDashboard?.ongoing || null
  );

  const [searchInput, setSearchInput] = useState("");

  const [selectedContracts, setSelectedContracts] = useState([]);
  const [selectedRowsArrayID, setSelectedRowsArrayID] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  const [isRenewConfirmModalOpen, setisRenewConfirmModalOpen] = useState(false);

  const dateFormatShow = "DD/MM/YYYY";

  useEffect(() => {
    if (!renewContractDashboard) {
      actions.getContractsWithQueryDashboard({ status: "to_be_renewed" });
    }
  }, []);

  useEffect(() => {
    setListContract(renewContractDashboard?.ongoing);
    setDataSetSource(renewContractDashboard?.ongoing);
  }, [renewContractDashboard]);

  useEffect(() => {
    setListContract(dataSetSource);
    setSelectedContracts([]);
    setSelectedRowsArrayID([]);
    setSearchInput("");
  }, [isModalOpen]);

  useEffect(() => {
    setListContract(dataSetSource);
  }, [dataSetSource]);

  const replaceWithSourcedata = (record) => {
    let data = dataSetSource;
    data.forEach((contract, index) => {
      if (record.id == contract.id) {
        data[index] = record;
      }
    });
    setDataSetSource(data);
  };

  const filterList = (value) => {
    const list = dataSetSource.filter((contract) => {
      return (
        contract.consultant.name.toLowerCase().includes(value.toLowerCase()) ||
        contract.supplier.name.toLowerCase().includes(value.toLowerCase()) ||
        contract.project.project_name
          .toLowerCase()
          .includes(value.toLowerCase())
      );
    });
    setListContract(list);
  };

  const onclose = () => {
    setisModalOpen(false);
  };
  const renewConfirmClose = () => {
    setisRenewConfirmModalOpen(false);
    setSelectedContracts([]);
    setSelectedRowsArrayID([]);
  };

  const setOpacityforPeriod = (e) => {
    e.target.parentElement.parentElement.parentElement.style.opacity = 1;
    e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.opacity = 0.5;
  };
  const setOpacityforEndDate = (e) => {
    e.target.parentElement.parentElement.style.opacity = 1;
    e.target.parentElement.parentElement.parentElement.previousElementSibling.children[0].style.opacity = 0.5;
  };

  const disabledDate = (current, end_date) => {
    return current < new Date(end_date);
  };

  const renewContractsRequest = () => {
    let request = { renew_contracts: [] };
    selectedContracts.forEach((contract) => {
      let obj = {};
      obj["id"] = contract.id;
      if (contract.choosen == "endDate") {
        obj["end_date"] = dateFormatStandard2(contract.renew_for_endDate);
      } else {
        obj["period"] = contract.renew_for_period;
      }
      if (Object.keys(obj).length == 2) {
        request.renew_contracts.push(obj);
      }
    });
    console.log(request);
    if (request.renew_contracts.length) {
      actions.renewContractsDashboard(request, { status: "to_be_renewed" });
    }
  };

  const renewContractColumns = [
    {
      title: "Name",
      key: "name",
      dataIndex: ["consultant", "name"],
      render: (text) => <div style={{ color: primaryColor }}>{text}</div>,
    },

    {
      title: "Suppllier",
      dataIndex: ["supplier", "name"],
      key: "supplier",
    },
    {
      title: "Project",
      dataIndex: ["project", "project_name"],
      key: "project",
      width: "90px",
    },
    {
      title: "Renew Within",
      key: "renew_within",
      dataIndex: ["end_date"],
      render: (endDate) => (
        <div style={{ fontSize: "12px" }}>
          <span style={{ color: themeColors.redDanger }}>
            {dateDifference(new Date(), new Date(endDate))} Days
          </span>
          <CollectionName>{dateFormat(endDate)}</CollectionName>
        </div>
      ),
    },
    {
      title: "Renew For",
      children: [
        {
          title: "Period",
          key: "renew_for_period",
          width: "80px",
          render: (record) => {
            if (!record.renew_for_period) {
              record["renew_for_period"] = 1;
              record["choosen"] = "period";
              replaceWithSourcedata(record);
            }
            return (
              <Select
                defaultValue={record.renew_for_period}
                style={{
                  width: 80,
                  opacity: record.choosen == "period" ? 1 : 0.5,
                }}
                onFocus={(e) => {
                  record["choosen"] = "period";
                  replaceWithSourcedata(record);
                  setOpacityforPeriod(e);
                }}
                onChange={(e) => {
                  record["renew_for_period"] = e;
                  replaceWithSourcedata(record);
                }}
              >
                <Option value={6}>6</Option>
                <Option value={3}>3</Option>
                <Option value={2}>2</Option>
                <Option value={1}>1</Option>
              </Select>
            );
          },
        },

        {
          title: "(or) End Date",
          key: "renew_for_endDate",
          render: (record) => {
            let end_date = new Date(record.end_date);
            end_date.setDate(end_date.getDate() + 30);
            if (!record.renew_for_endDate) {
              record["renew_for_endDate"] = end_date;
              replaceWithSourcedata(record);
            }
            let defaultDate = new Date(record["renew_for_endDate"]);
            return (
              <DatePicker
                defaultValue={moment(defaultDate, dateFormatShow)}
                format={dateFormatShow}
                disabledDate={(current) => disabledDate(current, end_date)}
                style={{
                  width: 100,
                  opacity: record.choosen == "endDate" ? 1 : 0.5,
                }}
                onFocus={(e) => {
                  record["choosen"] = "endDate";
                  replaceWithSourcedata(record);
                  setOpacityforEndDate(e);
                }}
                onChange={(e) => {
                  record["renew_for_endDate"] = e;
                  replaceWithSourcedata(record);
                }}
                allowClear={false}
              />
            );
          },
        },
      ],
    },

    {
      title: "Action",
      render: (record) => (
        <Button
          onClick={() => {
            setSelectedContracts([record]);
            setSelectedRowsArrayID([]);
            setisRenewConfirmModalOpen(true);
          }}
        >
          Renew
        </Button>
      ),
    },
  ];

  const contentStyle = {
    display: "flex",
    height: "90%",
    gap: "10px",
    fontSize: "18px",
    alignItems: "center",
    marginLeft: "40px",
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "23px",
    gap: "10px",
    display: "flex",
    right: "20px",
  };

  const renderConfirmRenew = () => {
    return (
      <>
        <div style={contentStyle}>
          <CachedIcon style={{ color: primaryColor }} />
          <div>
            Renew selected Contract(s) ?
            <div style={{ fontSize: "14px" }}>
              {"You can't undo this action"}
            </div>
          </div>
        </div>
        <div style={buttonStyle}>
          <Button deleteModal onClick={() => renewConfirmClose()}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              renewContractsRequest();
              renewConfirmClose();
            }}
            type="primary"
          >
            Renew
          </Button>
        </div>
      </>
    );
  };

  const renderTable = (rowCount) => {
    return (
      <>
        <Table
          rowKey={["id"]}
          pagination={{
            pageSize: rowCount,
            position: ["bottomLeft"],
            simple: true,
          }}
          loading={listContract == null}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: selectedRowsArrayID,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedContracts(selectedRows);
              setSelectedRowsArrayID(selectedRowKeys);
            },
          }}
          style={{ height: "100%" }}
          dataSource={listContract}
          columns={renewContractColumns}
        ></Table>
        <Button
          type="primary"
          style={{ position: "absolute", right: "50px", bottom: "11px" }}
          disabled={!selectedContracts.length}
          onClick={() => setisRenewConfirmModalOpen(true)}
        >
          Renew Selected
        </Button>
      </>
    );
  };
  const renderContent = () => {
    return (
      <RenewableCard style={{ position: "relative" }}>
        <div style={{ height: "12%" }}>
          <CardTitle style={{ margin: "0px 0px 4px 0px" }}>
            <div>Contracts To Renew</div>
            <div>
              <Search
                placeholder="search"
                style={{ width: 200 }}
                value={searchInput}
                allowClear
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  filterList(e.target.value);
                }}
              />
              <LaunchIcon
                className="cursorPointer"
                style={{ margin: "5px 5px 5px 10px" }}
                onClick={() => setisModalOpen(true)}
              />
            </div>
          </CardTitle>
        </div>
        <div style={{ height: "88%" }}>{renderTable(2)}</div>
      </RenewableCard>
    );
  };

  return (
    <>
      {renderContent()}
      {isModalOpen && (
        <ModalLayout
          width={"700px"}
          height={"550px"}
          title={"Contracts To Renew"}
          searchedValue={filterList}
          onclose={onclose}
        >
          {renderTable(8)}
        </ModalLayout>
      )}
      {isRenewConfirmModalOpen && (
        <ModalLayout
          width={"380px"}
          height={"200px"}
          title={"Confirm Renewal"}
          onclose={renewConfirmClose}
        >
          {renderConfirmRenew()}
        </ModalLayout>
      )}
    </>
  );
};

export default RenewContract;
