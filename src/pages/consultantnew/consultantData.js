import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Button, Select, Row, Col, Input } from "antd";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RefContext from "Utilities/refContext";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  CardLeft,
  WrapperCard,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
  CommonButton,
} from "Components/common.style";
import { themeColors, tertiaryColor, primaryColor } from "Config/theme";
import CardRightComp from "./cardRightComp";
import { dateFormatStandard } from "../../utilities/helpers";
import moment from "moment";
import ModalLayout from "Components/modalLayout";

const ConsultantData = () => {
  const { Search } = Input;
  const context = useContext(RefContext);
  const {
    store: {
      consultantsList,
      detailOfConsultant,
      suppliersList,
      clientsList,
      projectsList,
    },
    actions: {
      getConsultantsData,
      getDetailOfConsultant,
      addConsultant,
      deleteConsultant,
      getSupplierData,
      getClientData,
      getProjectData,
      addConsultantwithContract,
      renewContracts,
    },
  } = context;

  const { Option } = Select;

  const [displayConsultDetails, setDisplayConsultDetails] = useState(false);
  const [displayCreateConsultant, setDisplayCreateConsultant] = useState(false);
  const [displayEditConsultant, setdisplayEditConsultant] = useState(false);

  const [isRenewModalOpen, setRenewModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [renewContractDetail, setRenewContractDetail] = useState(null);
  const [deleteContractDetail, setDeleteContractDetail] = useState(null);
  const [period, setPeriod] = useState(6);

  const [listConsultant, setListConsultant] = useState(consultantsList);
  useEffect(() => {
    getConsultantsData();
    getSupplierData();
    getClientData();
    getProjectData();
  }, []);

  useEffect(() => {
    setListConsultant(consultantsList);
  }, [consultantsList]);

  const showDetails = () => {
    setDisplayConsultDetails(true);
    setDisplayCreateConsultant(false);
    setdisplayEditConsultant(false);
  };

  const showCreate = () => {
    setDisplayConsultDetails(false);
    setDisplayCreateConsultant(true);
    setdisplayEditConsultant(false);
  };

  const showEdit = (num) => {
    getDetailOfConsultant(num);
    setDisplayConsultDetails(false);
    setDisplayCreateConsultant(false);
    setdisplayEditConsultant(true);
  };

  const handleClick = (num) => {
    getDetailOfConsultant(num);
    showDetails();
  };

  const onclose = () => {
    setRenewModalOpen(false);
    setPeriod(6);
    setRenewContractDetail(null);
    setDeleteModalOpen(false);
    setDeleteContractDetail(null);
  };

  const renewContractsRequest = () => {
    let request = { renew_contracts: [] };
    if (period && renewContractDetail) {
      request.renew_contracts.push({
        id: renewContractDetail.contracts.ongoing[0].id,
        period: period,
      });
      console.log(request);
      renewContracts(request);
      onclose();
    }
  };
  const filterList = (value) => {
    const list = consultantsList.filter((consultant) => {
      return (
        consultant.name.toLowerCase().includes(value.toLowerCase()) ||
        consultant.supplier.name.toLowerCase().includes(value.toLowerCase()) ||
        consultant.contracts.project?.project_name
          ?.toLowerCase()
          .includes(value.toLowerCase())
      );
    });
    setListConsultant(list);
  };

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (consultantsList, record) => (
        <Space size="middle">
          <a onClick={() => handleClick(consultantsList.id)}>{record.name}</a>
        </Space>
      ),
    },
    {
      title: "Supplier",
      key: "supplier",
      render: (consultantsList) => (
        <Space size="middle">{consultantsList.supplier.name}</Space>
      ),
    },
    {
      title: "Project",
      key: "project",
      render: (consultantsList) => {
        if (
          consultantsList.contracts.count -
            consultantsList.contracts.expired.length <
          1
        ) {
          return (
            <div style={{ textAlign: "center", color: themeColors.redDanger }}>
              <CancelIcon></CancelIcon>
            </div>
          );
        } else {
          if (
            consultantsList.contracts.ongoing.length ||
            consultantsList.contracts.upcoming.length
          ) {
            return (
              <Space className="centerAlign">
                {consultantsList.contracts.ongoing[0]?.project?.project_name ||
                  consultantsList.contracts.upcoming[0]?.project?.project_name}
              </Space>
            );
          } else {
            return (
              <div
                style={{ textAlign: "center", color: themeColors.redDanger }}
              >
                <CancelIcon></CancelIcon>
              </div>
            );
          }
        }
      },
    },
    {
      title: "Active Contract Expires in",
      key: "acei",
      render: (consultantsList) => {
        if (consultantsList.contracts.ongoing.length < 1) {
          return (
            <div style={{ textAlign: "center", color: themeColors.redDanger }}>
              <CancelIcon></CancelIcon>
            </div>
          );
        } else {
          if (consultantsList.contracts.ongoing.length) {
            return (
              <div className="centerAlign">
                <div
                  style={{
                    color:
                      consultantsList.contracts.ongoing[0].status ==
                      "to_be_renewed"
                        ? themeColors.redDanger
                        : themeColors.black,
                  }}
                >
                  {moment(consultantsList.contracts.ongoing[0].end_date).diff(
                    moment(),
                    "days"
                  ) + 1}
                  days
                </div>
                <div style={{ color: tertiaryColor }}>
                  {dateFormatStandard(
                    consultantsList.contracts.ongoing[0]?.end_date
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div
                style={{ textAlign: "center", color: themeColors.redDanger }}
              >
                <CancelIcon />
              </div>
            );
          }
        }
      },
    },
    {
      title: "Renewal/Upcoming start",
      key: "ren",
      render: (consultantsList) => {
        if (
          !(
            consultantsList.contracts.count -
            consultantsList.contracts.expired.length
          )
        ) {
          return null;
        } else if (consultantsList.contracts.upcoming.length) {
          if (consultantsList.contracts.ongoing.length) {
            if (consultantsList.contracts.ongoing[0].status == "renewed") {
              return (
                <div
                  style={{
                    textAlign: "center",
                    color: themeColors.greenSuccess,
                  }}
                >
                  <CheckCircleIcon />
                </div>
              );
            } else return null;
          } else {
            return (
              <div className="centerAlign">
                <div>
                  {moment(
                    consultantsList.contracts.upcoming[0].start_date
                  ).diff(moment(), "days") + 1}
                  days
                </div>
                <div style={{ color: tertiaryColor }}>
                  {dateFormatStandard(
                    consultantsList.contracts.upcoming[0]?.start_date
                  )}
                </div>
              </div>
            );
          }
        } else if (consultantsList.contracts.ongoing.length) {
          let contractDetail = consultantsList.contracts.ongoing[0];
          if (contractDetail.status == "to_be_renewed") {
            return (
              <div className="centerAlign">
                <Button
                  onClick={() => {
                    setRenewContractDetail(consultantsList);
                    setRenewModalOpen(true);
                  }}
                >
                  Renew
                </Button>
              </div>
            );
          } else if (contractDetail.status == "renewed") {
            return (
              <div
                style={{
                  textAlign: "center",
                  color: themeColors.greenSuccess,
                }}
              >
                <CheckCircleIcon />
              </div>
            );
          }
        } else return null;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (consultantsList) => (
        <Space size="middle">
          <EditIcon
            style={{ fill: "#6041b8", height: "18px" }}
            onClick={() => {
              showEdit(consultantsList.id);
            }}
          />
          <DeleteForeverIcon
            className="cursorPointer"
            style={{ fill: "red", height: "18px" }}
            onClick={() => {
              setDeleteContractDetail(consultantsList);
              setDeleteModalOpen(true);
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
  const colStyle = {
    gap: "20px",
    display: "flex",
    flexFlow: "column",
  };
  const valueStyle = {
    color: primaryColor,
    padding: "0px 10px",
  };

  const delValStyle = {
    color: themeColors.redDanger,
    padding: "0px 10px",
  };

  const renderDeleteContent = () => {
    return (
      <>
        <Row style={{ padding: "20px 10px" }}>
          <Col style={colStyle} span={9}>
            <div>
              Consultant name:
              <span style={delValStyle}>{deleteContractDetail.name}</span>
            </div>
            <div>
              Supplier name:
              <span style={delValStyle}>
                {deleteContractDetail.supplier.name}
              </span>
            </div>
            <div>
              Email:
              <span style={delValStyle}>{deleteContractDetail.email}</span>
            </div>
            <div>
              Phone:
              <span style={delValStyle}>{deleteContractDetail.phone}</span>
            </div>
          </Col>
          <Col style={colStyle} span={15}>
            <div>
              Consultant ID:
              <span style={delValStyle}>{deleteContractDetail.id}</span>
            </div>
            <div>
              Supplier ID:
              <span style={delValStyle}>
                {deleteContractDetail.supplier.id}
              </span>
            </div>
          </Col>
        </Row>
        <div style={buttonStyle}>
          <CommonButton deleteModal onClick={() => onclose()}>
            Cancel
          </CommonButton>
          <CommonButton
            onClick={() => {
              deleteConsultant(deleteContractDetail.id);
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

  const renderRenewContent = () => {
    return (
      <>
        <Row style={{ padding: "20px 10px" }}>
          <Col style={colStyle} span={12}>
            <div>
              Consultant name:
              <span style={valueStyle}>{renewContractDetail.name}</span>
            </div>
            <div>
              Supplier name:
              <span style={valueStyle}>
                {renewContractDetail.supplier.name}
              </span>
            </div>
            <div>
              Role:
              <span style={valueStyle}>
                {renewContractDetail.contracts.ongoing[0].role}
              </span>
            </div>
            <div>
              <span>Select Period: </span>
              <Select
                defaultValue={6}
                style={{ width: 120 }}
                onChange={(e) => setPeriod(e)}
              >
                <Option value={6}>6 months</Option>
                <Option value={3}>3 months</Option>
                <Option value={2}>2 months</Option>
                <Option value={1}>1 month</Option>
              </Select>
            </div>
          </Col>
          <Col style={colStyle} span={12}>
            <div>
              Project name:
              <span style={valueStyle}>
                {renewContractDetail.contracts.ongoing[0].project.project_name}
              </span>
            </div>
            <div>
              Client name:
              <span style={valueStyle}>
                {renewContractDetail.contracts.ongoing[0].client.name}
              </span>
            </div>
            <div>
              Cost / hour:
              <span style={valueStyle}>
                {renewContractDetail.contracts.ongoing[0].cost_per_hour}
              </span>
            </div>
          </Col>
        </Row>
        <div style={buttonStyle}>
          <CommonButton onClick={() => onclose()}>Cancel</CommonButton>
          <CommonButton onClick={() => renewContractsRequest()} type="primary">
            Renew
          </CommonButton>
        </div>
      </>
    );
  };

  const renderContent = () => {
    return (
      <WrapperCard>
        <CardLeftWrapper>
          <CardLeft>
            <Card1Header>
              <text>Consultants</text>
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
              dataSource={listConsultant}
              columns={columns}
              pagination={{ pageSize: 4 }}
              // onRow={(record, rowIndex) => {
              //   return {
              //     onClick: () => {
              //       handleClick(record.id);
              //     },
              //   };
              // }}
            ></Table>
          </CardLeft>
        </CardLeftWrapper>

        <CardRightWrapper>
          <CardRightComp
            detailOfConsultant={detailOfConsultant}
            displayConsultDetails={displayConsultDetails}
            displayCreateConsultant={displayCreateConsultant}
            addConsultant={addConsultant}
            displayEditConsultant={displayEditConsultant}
            suppliersList={suppliersList}
            clientsList={clientsList}
            projectsList={projectsList}
            addConsultantwithContract={addConsultantwithContract}
          />
        </CardRightWrapper>
      </WrapperCard>
    );
  };

  return (
    <>
      {renderContent()}
      {(isRenewModalOpen || isDeleteModalOpen) && (
        <ModalLayout
          width={"550px"}
          height={isDeleteModalOpen ? "300px" : "340px"}
          title={isDeleteModalOpen ? "Delete Contract" : "Renew Contract"}
          onclose={onclose}
          type={isDeleteModalOpen ? "delete" : "normal"}
        >
          {isRenewModalOpen && renderRenewContent()}
          {isDeleteModalOpen && renderDeleteContent()}
        </ModalLayout>
      )}
    </>
  );
};

export default ConsultantData;
