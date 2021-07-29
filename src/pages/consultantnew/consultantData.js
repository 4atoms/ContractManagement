import React, { useContext, useEffect, useState } from "react";
import { Table, Space } from "antd";
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
} from "Components/common.style";
import { themeColors } from "Config/theme";
import CardRightComp from "./cardRightComp";
import { dateFormatStandard, TodayDate } from "../../utilities/helpers";
import moment from "moment";

const ConsultantData = () => {
  const context = useContext(RefContext);
  const {
    store: { consultantsList, detailOfConsultant, suppliersList },
    actions: { getConsultantsData, getDetailOfConsultant, addConsultant, getSupplierData },
  } = context;

  const [displayConsultDetails, setDisplayConsultDetails] = useState(false);
  const [displayCreateConsultant, setDisplayCreateConsultant] = useState(false);
  const [displayEditConsultant, setdisplayEditConsultant] = useState(false);
  useEffect(() => {
    getConsultantsData();
    getSupplierData();
  }, []);

  const sup = () => {
    console.log(suppliersList);
  };
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
        if (consultantsList.contracts == null) {
          return <Space size="middle">X</Space>;
        } else {
          return (
            <Space size="middle">
              {consultantsList.contracts[0]?.project?.project_name}
            </Space>
          );
        }
      },
    },
    {
      title: "Active Contract Expires in",
      key: "acei",
      render: (consultantsList) => {
        if (consultantsList.contracts == null) {
          return <Space size="middle">X</Space>;
        } else {
          return (
            <Space size="middle">
              {dateFormatStandard(consultantsList.contracts[0]?.end_date)}
              {moment(consultantsList.contracts[0]?.end_date).diff(
                moment(),
                "days"
              )}
              <text>{TodayDate()}</text>
            </Space>
          );
        }
      },
    },
    {
      title: "Renewal/Upcoming start",
      dataIndex: "Renewal/Upcoming start",
      key: "ren",
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
          <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
        </Space>
      ),
    },
  ];
  return (
    <WrapperCard>
      <CardLeftWrapper>
        <CardLeft>
          <Card1Header>
            <text>Consultants</text>
            <div>{sup()}</div>
            <AddCircleIcon
              style={{ float: "right" }}
              onClick={showCreate}
            ></AddCircleIcon>
          </Card1Header>
          <Table
            dataSource={consultantsList}
            columns={columns}
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
        />
      </CardRightWrapper>
    </WrapperCard>
  );
};

export default ConsultantData;
