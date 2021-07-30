import React, { useEffect, useState } from "react";
import { CardTitle, RenewableCard, CollectionName } from "./../dashboard.style";
import { Input, Button, Table, Select } from "antd";
import { dateFormat, dateDifference } from "Utilities/helpers";

const RenewContract = ({ store, actions }) => {
  const { contractListDraft } = store;
  const { Search } = Input;
  const { Option } = Select;

  const [listContract, setListContract] = useState(
    contractListDraft?.ongoing || null
  );

  const [selectedContracts, setSelectedContracts] = useState([]);

  useEffect(() => {
    if (!contractListDraft) {
      console.log("came");
      actions.getContractsDataWithQuery({ status: "to_be_renewed" });
    }
  }, []);

  useEffect(() => {
    setListContract(contractListDraft?.ongoing);
  }, [contractListDraft]);

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

  const renewContractsRequest = (contract = null) => {
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

  const timeSheetColumns = [
    {
      title: "Name",
      key: "name",
      dataIndex: ["consultant", "name"],
      render: (text) => <a>{text}</a>,
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
          <span>{dateDifference(new Date(), new Date(endDate))} Days</span>
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
          </div>
        </CardTitle>
      </div>
      <div style={{ height: "85%" }}>
        <Table
          rowKey={["id"]}
          pagination={{
            pageSize: 3,
            position: ["bottomLeft"],
            simple: true,
          }}
          //   loading = {listContract === null}
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedContracts(selectedRows);
            },
          }}
          style={{ height: "100%" }}
          dataSource={listContract}
          columns={timeSheetColumns}
        ></Table>
      </div>
      <Button
        type="primary"
        style={{ position: "absolute", right: "50px", bottom: "20px" }}
        disabled={!selectedContracts.length}
        onClick={() => renewContractsRequest()}
      >
        Renew Selected
      </Button>
    </RenewableCard>
  );
};

export default RenewContract;
