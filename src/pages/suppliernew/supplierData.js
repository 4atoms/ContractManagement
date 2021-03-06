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
  LinkTag,
} from "Components/common.style";
import CardRightComp from "./cardRightComp";
import ModalLayout from "Components/modalLayout";
import ConfirmDelete from "Components/confirmDelete";

const SupplierData = () => {
  const { Search } = Input;
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier, supplierAnalysis },
    actions: {
      getSupplierData,
      getDetailOfSupplier,
      addSupplier,
      deleteSupplier,
      editSupplier,
      getSupplierAnalysis,
      assignToSupplierStore,
    },
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayCreateSupplier, setDisplayCreateSupplier] = useState(false);
  const [displayEditSupplier, setDisplayEditSupplier] = useState(false);
  const [listSupplier, setListSupplier] = useState(suppliersList);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteSupplierDetail, setDeleteSupplierDetail] = useState(null);
  const [supplierChart, setSupplierChart] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [renderFirstData, setrenderFirstData] = useState(false);
  useEffect(() => {
    getSupplierData();
  }, []);

  useEffect(() => {
    setListSupplier(suppliersList);
    if (suppliersList && !renderFirstData) {
      setrenderFirstData(true);
    }
  }, [suppliersList]);

  useEffect(() => {
    if (suppliersList && renderFirstData) {
      if (suppliersList.length) {
        getDetailOfSupplier(suppliersList[0].id);
        showDetails();
      } else {
        showCreate();
      }
    }
  }, [renderFirstData]);

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
    assignToSupplierStore("detailOfSupplier", null);
    getDetailOfSupplier(num);
    setDisplayDetails(false);
    setDisplayCreateSupplier(false);
    setDisplayEditSupplier(true);
  };

  const showChart = (num, query) => {
    getSupplierAnalysis(num, query);
    setSupplierChart(true);
  };

  const handleClick = (num) => {
    assignToSupplierStore("detailOfSupplier", null);
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
          <LinkTag>
            <a onClick={() => handleClick(suppliersList.id)}>{record.name} </a>
          </LinkTag>
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
            className="cursorPointer"
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
                pagination={{ pageSize: 6 }}
              ></Table>
            </CardLeft>
          </CardLeftWrapper>

          <CardRightWrapper>
            <CardRightComp
              suppliersList={listSupplier}
              detailOfSupplier={detailOfSupplier}
              displayDetails={displayDetails}
              displayCreateSupplier={displayCreateSupplier}
              addSupplier={addSupplier}
              editSupplier={editSupplier}
              displayEditSupplier={displayEditSupplier}
              supplierChart={supplierChart}
              setSupplierChart={setSupplierChart}
              showDetails={showDetails}
              showEdit={showEdit}
              showChart={showChart}
              setDeleteModalOpen={setDeleteModalOpen}
              setDeleteSupplierDetail={setDeleteSupplierDetail}
              setTotalAmount={setTotalAmount}
              supplierAnalysis={supplierAnalysis}
              getSupplierAnalysis={getSupplierAnalysis}
              totalAmount={totalAmount}
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
          {isDeleteModalOpen && (
            <ConfirmDelete
              deleteIt={() => {
                deleteSupplier(deleteSupplierDetail).then(() => {
                  getSupplierData();
                  setrenderFirstData(false);
                  showDetails();
                });
                onclose();
              }}
              cancelIt={onclose}
            />
          )}
        </ModalLayout>
      )}
    </>
  );
};
export default SupplierData;
