import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Input, Row, Col } from "antd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import WarningIcon from "@material-ui/icons/Warning";
import RefContext from "Utilities/refContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { themeColors, tertiaryColor, primaryColor } from "Config/theme";
import {
  CardLeft,
  WrapperCard,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
  BadgeGreen,
  BadgeOrange,
  BadgeBlue,
  CommonButton,
  HeaderDelete,
  DeleteBox,
  TextDiv,
} from "Components/common.style";
import CardRightComp from "./cardRightComp";
import ModalLayout from "Components/modalLayout";
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
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteSupplierDetail, setDeleteSupplierDetail] = useState(null);
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
  const onclose = () => {
    setDeleteModalOpen(false);
    setDeleteSupplierDetail(null);
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
            className="cursorPointer"
            style={{ fill: "#6041b8", height: "18px" }}
            onClick={() => {
              showEdit(suppliersList.id);
            }}
          />
          <DeleteForeverIcon
            style={{ fill: "red", height: "18px" }}
            onClick={() => {
              setDeleteModalOpen(true);
              setDeleteSupplierDetail(suppliersList.id);
            }}
          />
        </Space>
      ),
    },
  ];
  const buttonStyle = {
    position: "absolute",
    bottom: "23px",
    gap: "10px",
    display: "flex",
    right: "20px",
  };

  const contentStyle = {
    display: "flex",
    height: "90%",
    justifyContent: "center",
    gap: "20px",
    fontSize: "18px",
    alignItems: "center",
  };

  const renderDeleteContent = () => {
    return (
      <>
        <div style={contentStyle}>
          <WarningIcon style={{ color: themeColors.redDanger }} />
          <div>
            Are you sure you want to delete?
            <div style={{ fontSize: "14px" }}>You cant undo this action</div>
          </div>
        </div>
        <div style={buttonStyle}>
          <CommonButton deleteModal onClick={() => onclose()}>
            Cancel
          </CommonButton>
          <CommonButton
            onClick={() => {
              deleteSupplier(deleteSupplierDetail);
              onclose();
            }}
            type="primary"
            deleteModal
          >
            Delete
          </CommonButton>
        </div>
      </>
    );
  };
  const renderContent = () => {
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
              showDetails={showDetails}
              showEdit={showEdit}
            />
          </CardRightWrapper>
        </WrapperCard>
      </>
    );
  };
  return (
    <>
      {renderContent()}
      {isDeleteModalOpen && (
        <ModalLayout
          width={"450px"}
          height={"225px"}
          title={"Confirm Deletion"}
          onclose={onclose}
          type={"delete"}
        >
          {isDeleteModalOpen && renderDeleteContent()}
        </ModalLayout>
      )}
    </>
  );
};
export default SupplierData;
