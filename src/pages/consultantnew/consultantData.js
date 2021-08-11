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
import { dateFormatStandard, dateDifference } from "../../utilities/helpers";
import ModalLayout from "Components/modalLayout";
import ConfirmDelete from "Components/confirmDelete";

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
      deleteContract,
      updateConsultant,
    },
  } = context;

  const { Option } = Select;

  const [displayConsultDetails, setDisplayConsultDetails] = useState(false);
  const [displayCreateConsultant, setDisplayCreateConsultant] = useState(false);
  const [displayEditConsultant, setdisplayEditConsultant] = useState(false);

  const [isRenewModalOpen, setRenewModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isContractCancelledModalOpen, setContractCancelledModalOpen] =
    useState(false);

  const [renewContractDetail, setRenewContractDetail] = useState(null);
  const [deleteConsultantDetail, setDeleteConsultantDetail] = useState(null);
  const [deleteContractDetail, setDeleteContractDetail] = useState(null);
  const [period, setPeriod] = useState(6);

  const [displayCreateContract, setdisplayCreateContract] = useState(false);

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
    setdisplayCreateContract(false);
  };

  const showCreate = () => {
    setDisplayConsultDetails(false);
    setDisplayCreateConsultant(true);
    setdisplayEditConsultant(false);
    setdisplayCreateContract(false);
  };

  const showEdit = (num) => {
    getDetailOfConsultant(num);
    setDisplayConsultDetails(false);
    setDisplayCreateConsultant(false);
    setdisplayEditConsultant(true);
    setdisplayCreateContract(false);
  };

  //Used for create contract Card
  const showCreateContract = () => {
    setDisplayConsultDetails(false);
    setDisplayCreateConsultant(false);
    setdisplayEditConsultant(false);
    setdisplayCreateContract(true);
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
    setDeleteConsultantDetail(null);
    setContractCancelledModalOpen(false);
    setDeleteContractDetail(null);
  };

  const renewContractsRequest = () => {
    let request = { renew_contracts: [] };
    let contractDetail =
      renewContractDetail?.contracts?.ongoing?.[0] ||
      renewContractDetail?.contracts?.active?.[0];
    if (period && renewContractDetail) {
      request.renew_contracts.push({
        id: contractDetail.id,
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
                  {dateDifference(
                    new Date(),
                    new Date(consultantsList.contracts.ongoing[0].end_date)
                  )}
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
          consultantsList.contracts.count -
            consultantsList.contracts.expired.length ==
          0
        ) {
          return null;
        } else if (consultantsList.contracts.upcoming.length) {
          if (
            consultantsList.contracts.ongoing.length &&
            consultantsList.contracts.ongoing[0].status == "renewed"
          ) {
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
          } else {
            return (
              <div className="centerAlign">
                <div>
                  {dateDifference(
                    new Date(),
                    new Date(consultantsList.contracts.upcoming[0].start_date)
                  )}
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
            className="cursorPointer"
            style={{ fill: "#6041b8", height: "18px" }}
            onClick={() => {
              showEdit(consultantsList.id);
            }}
          />
          <DeleteForeverIcon
            className="cursorPointer"
            style={{ fill: "red", height: "18px" }}
            onClick={() => {
              setDeleteConsultantDetail(consultantsList);
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

  const renderRenewContent = () => {
    let renewableContract =
      renewContractDetail?.contracts?.ongoing?.[0] ||
      renewContractDetail?.contracts?.active?.[0];
    return (
      <>
        <Row style={{ padding: "20px 10px" }}>
          <Col style={colStyle} span={12}>
            <div>
              Consultant name:
              <span style={valueStyle}>{renewContractDetail?.name}</span>
            </div>
            <div>
              Supplier name:
              <span style={valueStyle}>
                {renewContractDetail?.supplier?.name}
              </span>
            </div>
            <div>
              Role:
              <span style={valueStyle}>{renewableContract.role}</span>
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
                {renewableContract?.project?.project_name}
              </span>
            </div>
            <div>
              Client name:
              <span style={valueStyle}>{renewableContract?.client?.name}</span>
            </div>
            <div>
              Cost / hour:
              <span style={valueStyle}>{renewableContract?.cost_per_hour}</span>
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
            displayCreateContract={displayCreateContract}
            showCreateContract={showCreateContract}
            updateConsultant={updateConsultant}
            showDetails={showDetails}
            showEdit={showEdit}
            setDeleteModalOpen={setDeleteModalOpen}
            setDeleteConsultantDetail={setDeleteConsultantDetail}
            setRenewModalOpen={setRenewModalOpen}
            setRenewContractDetail={setRenewContractDetail}
            setContractCancelledModalOpen={setContractCancelledModalOpen}
            setDeleteContractDetail={setDeleteContractDetail}
          />
        </CardRightWrapper>
      </WrapperCard>
    );
  };

  return (
    <>
      {renderContent()}
      {(isRenewModalOpen ||
        isDeleteModalOpen ||
        isContractCancelledModalOpen) && (
        <ModalLayout
          width={isRenewModalOpen ? "550px" : "450px"}
          height={isRenewModalOpen ? "340px" : "225px"}
          title={
            isDeleteModalOpen
              ? "Delete Consultant"
              : isContractCancelledModalOpen
              ? "Cancel the Contract"
              : "Renew Contract"
          }
          onclose={onclose}
          type={isRenewModalOpen ? "normal" : "delete"}
        >
          {isRenewModalOpen && renewContractDetail && renderRenewContent()}
          {isDeleteModalOpen && (
            <ConfirmDelete
              deleteIt={() => {
                deleteConsultant(deleteConsultantDetail.id);
                onclose();
              }}
              cancelIt={onclose}
            />
          )}
          {isContractCancelledModalOpen && (
            <ConfirmDelete
              deleteIt={() => {
                deleteContract(deleteContractDetail);
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

export default ConsultantData;
