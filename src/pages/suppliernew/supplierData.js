import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Input } from "antd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RefContext from "Utilities/refContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardLeft,
  WrapperCard,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
  BadgeGreen,
  BadgeOrange,
  BadgeBlue,
} from "Components/common.style";
import CardRightComp from "./cardRightComp";
// import { themeColors } from "Config/theme";
// import RightCardComp from "./rightCardComp";
const SupplierData = () => {
  const { Search } = Input;
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier },
    actions: {
      getSupplierData,
      getDetailOfSupplier,
      addSupplier,
      deleteSupplier,
      editSupplier,
    },
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayCreateSupplier, setDisplayCreateSupplier] = useState(true);
  const [displayEditSupplier, setDisplayEditSupplier] = useState(false);
  const [listSupplier, setListSupplier] = useState(suppliersList);
  useEffect(() => {
    getSupplierData();
  }, []);
  useEffect(() => {
    setListSupplier(suppliersList);
  }, [suppliersList]);

  const showDetails = () => {
    setDisplayDetails(true);
    setDisplayCreateSupplier(false);
    setDisplayEditSupplier(false);
  };
  const showCreate = () => {
    setDisplayDetails(false);
    setDisplayCreateSupplier(true);
    setDisplayEditSupplier(false);
  };

  const showEdit = (num) => {
    getDetailOfSupplier(num);
    setDisplayDetails(false);
    setDisplayCreateSupplier(false);
    setDisplayEditSupplier(true);
  };

  const handleClick = (num) => {
    getDetailOfSupplier(num);
    showDetails();
  };
  const filterList = (value) => {
    const list = suppliersList.filter((supplier) => {
      return (
        supplier.name.toLowerCase().includes(value.toLowerCase()) ||
        supplier.organization_no.toLowerCase().includes(value.toLowerCase())
      );
    });
    setListSupplier(list);
  };

  const columns = [
    {
      title: "Supplier Name",
      key: "name",
      render: (suppliersList, record) => (
        <Space size="middle">
          <a onClick={() => handleClick(suppliersList.id)}>{record.name}</a>
        </Space>
      ),
    },

    {
      title: "Organization No",
      dataIndex: "organization_no",
      key: "organization_no",
    },
    {
      title: "Total Consultants",
      key: "totalconsultants",
      render: (suppliersList) => (
        <Space size="middle">{suppliersList.consultants}</Space>
      ),
    },
    {
      title: (
        <>
          <div>Contract Status</div>
          <span
            style={{
              color: "rgb(82, 196, 26)",
            }}
          >
            Ongoing/
          </span>
          <span
            style={{
              color: "rgb(255, 122, 0)",
            }}
          >
            To renew/
          </span>
          <span
            style={{
              color: "rgb(108, 193, 255)",
            }}
          >
            Upcoming
          </span>
        </>
      ),
      key: "contract_summary",
      render: (suppliersList) => (
        <Space size="middle">
          <BadgeGreen>
            <Badge
              count={suppliersList.contract_summary?.ongoing}
              showZero
              className="site-badge-count-4"
            />
          </BadgeGreen>
          <BadgeOrange>
            <Badge
              count={suppliersList.contract_summary?.to_be_renewed}
              showZero
              className="site-badge-count-4"
            />
          </BadgeOrange>
          <BadgeBlue>
            <Badge
              count={suppliersList.contract_summary?.upcoming}
              showZero
              className="site-badge-count-4"
            />
          </BadgeBlue>
        </Space>
      ),
    },
    {
      title: "Action",
      key: "view",
      render: (suppliersList) => (
        <Space size="middle">
          <EditIcon
            style={{ fill: "#6041b8", height: "18px" }}
            onClick={() => {
              showEdit(suppliersList.id);
            }}
          />
          <DeleteForeverIcon
            style={{ fill: "red", height: "18px" }}
            onClick={() => {
              deleteSupplier(suppliersList.id);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <WrapperCard>
        <CardLeftWrapper>
          <CardLeft>
            <Card1Header>
              <text>Suppliers</text>
              <AddCircleIcon
                style={{ float: "right" }}
                onClick={showCreate}
              ></AddCircleIcon>
              <Search
                placeholder="search"
                style={{ width: 200, float: "right" }}
                allowClear
                onChange={(e) => filterList(e.target.value)}
              />
            </Card1Header>
            <Table
              dataSource={listSupplier}
              columns={columns}
              pagination={{ pageSize: 4 }}
            ></Table>
          </CardLeft>
        </CardLeftWrapper>

        <CardRightWrapper>
          <CardRightComp
            detailOfSupplier={detailOfSupplier}
            displayDetails={displayDetails}
            displayCreateSupplier={displayCreateSupplier}
            addSupplier={addSupplier}
            editSupplier={editSupplier}
            displayEditSupplier={displayEditSupplier}
          />
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
