import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Space,
  Button,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
} from "antd";
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
import {
  dateFormatStandard,
  dateDifference,
  dateFormatStandard2,
} from "../../utilities/helpers";
import ModalLayout from "Components/modalLayout";
import ConfirmDelete from "Components/confirmDelete";

import moment from "moment";

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
      assignToConsultantStore,
    },
  } = context;

  const { Option } = Select;
  const dateFormat = "DD/MM/YYYY";

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
  const [period, setPeriod] = useState(1);
  const [endDate, setEndDate] = useState(null);
  const [choosen, setChoosen] = useState("period");

  const [displayCreateContract, setdisplayCreateContract] = useState(false);

  const [listConsultant, setListConsultant] = useState(consultantsList);

  const [consulantNullToData, setConsulantNullToData] = useState(false);

  useEffect(() => {
    getConsultantsData();
    getSupplierData();
    getClientData();
    getProjectData();
    showDetails();
  }, []);

  useEffect(() => {
    setListConsultant(consultantsList);
    if (consultantsList) {
      setConsulantNullToData(true);
    }
  }, [consultantsList]);

  useEffect(() => {
    if (consulantNullToData) {
      if (consultantsList.length) {
        getDetailOfConsultant(consultantsList[0].id);
      } else setDisplayConsultDetails(false);
    }
  }, [consulantNullToData]);
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
    assignToConsultantStore("detailOfConsultant", null);
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
    assignToConsultantStore("detailOfConsultant", null);
    getDetailOfConsultant(num);
    showDetails();
  };

  const onclose = () => {
    setRenewModalOpen(false);
    setPeriod(1);
    setRenewContractDetail(null);
    setDeleteModalOpen(false);
    setDeleteConsultantDetail(null);
    setContractCancelledModalOpen(false);
    setDeleteContractDetail(null);
    setChoosen("period");
    setEndDate(null);
  };

  const renewContractsRequest = () => {
    let request = { renew_contracts: [] };
    let contractDetail =
      renewContractDetail?.contracts?.ongoing?.[0] ||
      renewContractDetail?.contracts?.active?.[0];
    console.log(choosen, endDate, period);
    if (
      renewContractDetail &&
      ((choosen == "period" && period) || (choosen == "date" && endDate))
    ) {
      let obj = {};
      obj["id"] = contractDetail.id;
      if (choosen == "date") {
        obj["end_date"] = endDate;
      } else {
        obj["period"] = period;
      }
      request.renew_contracts.push(obj);
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

  const disabledDate = (current, end_date) => {
    return current < moment(end_date);
  };

  const renderRenewContent = () => {
    let renewableContract =
      renewContractDetail?.contracts?.ongoing?.[0] ||
      renewContractDetail?.contracts?.active?.[0];
    let end_date = new Date(renewableContract.end_date);
    end_date.setDate(end_date.getDate() + 30);
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
              <div>Select Period: </div>
              <Select
                defaultValue={1}
                onChange={(e) => setPeriod(e)}
                onFocus={() => setChoosen("period")}
                style={{ width: 120, opacity: choosen == "period" ? 1 : 0.5 }}
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
              <span style={valueStyle}>
                SEK {renewableContract?.cost_per_hour}
              </span>
            </div>
            <div>
              <div>Or Select End Date</div>
              <DatePicker
                style={{ opacity: choosen == "date" ? 1 : 0.5 }}
                defaultValue={moment(end_date, dateFormat)}
                onFocus={() => {
                  setChoosen("date");
                  if (!endDate) setEndDate(dateFormatStandard2(end_date));
                }}
                format={dateFormat}
                disabledDate={(current) => disabledDate(current, end_date)}
                onChange={(e) => setEndDate(dateFormatStandard2(e))}
                allowClear={false}
              />
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
              loading={consultantsList == null}
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
