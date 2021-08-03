import React, { useEffect, useState } from "react";
import {
  CardTitle,
  RenewableCard,
  CollectionName,
  Button,
} from "./../dashboard.style";
import { Input, Table, Select } from "antd";
import { dateFormat, dateDifference } from "Utilities/helpers";
import ModalLayout from "Components/modalLayout";

import LaunchIcon from "@material-ui/icons/Launch";

import { primaryColor, themeColors } from "Theme";

const RenewContract = ({ store, actions }) => {
  const { contractListDraft } = store;
  const { Search } = Input;
  const { Option } = Select;

  const [listContract, setListContract] = useState(
    contractListDraft?.ongoing || null
  );

  const [selectedContracts, setSelectedContracts] = useState([]);
  const [selectedRowsArrayID, setSelectedRowsArrayID] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    if (!contractListDraft) {
      actions.getContractsDataWithQuery({ status: "to_be_renewed" });
    }
  }, []);

  useEffect(() => {
    setListContract(contractListDraft?.ongoing);
  }, [contractListDraft]);

  useEffect(() => {
    setSelectedContracts([]);
    setSelectedRowsArrayID([]);
  }, [isModalOpen]);

  const filterList = (value) => {
    const list = contractListDraft.ongoing.filter((contract) => {
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

  const renewContractsRequest = (contract = null) => {
    console.log("clicked");
    let request = { renew_contracts: [] };
    if (contract) {
      request.renew_contracts.push({
        id: contract.id,
        period: contract.renew_for,
      });
    } else {
      selectedContracts.forEach((contract) => {
        request.renew_contracts.push({
          id: contract.id,
          period: contract.renew_for,
        });
      });
    }
    actions.renewContracts(request, { status: "to_be_renewed" });
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
      key: "renew_for",
      render: (record) => {
        if (!record.renew_for) {
          record["renew_for"] = 6;
        }
        return (
          <Select
            defaultValue={6}
            style={{ width: 120 }}
            onChange={(e) => (record["renew_for"] = e)}
          >
            <Option value={6}>6 months</Option>
            <Option value={3}>3 months</Option>
            <Option value={2}>2 months</Option>
            <Option value={1}>1 month</Option>
          </Select>
        );
      },
    },
    {
      title: "Action",
      render: (record) => (
        <Button onClick={() => renewContractsRequest(record)}>Renew</Button>
      ),
    },
  ];

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
          //   loading = {listContract === null}
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
          style={{ position: "absolute", right: "50px", bottom: "20px" }}
          disabled={!selectedContracts.length}
          onClick={() => renewContractsRequest()}
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
                allowClear
                onChange={(e) => filterList(e.target.value)}
              />
              <LaunchIcon
                className="cursorPointer"
                style={{ margin: "5px 5px 5px 10px" }}
                onClick={() => setisModalOpen(true)}
              />
            </div>
          </CardTitle>
        </div>
        <div style={{ height: "88%" }}>{renderTable(3)}</div>
      </RenewableCard>
    );
  };

  return (
    <>
      {renderContent()}
      {isModalOpen && (
        <ModalLayout title={"Contracts To Renew"} onclose={onclose}>
          {renderTable(8)}
        </ModalLayout>
      )}
    </>
  );
};

export default RenewContract;
