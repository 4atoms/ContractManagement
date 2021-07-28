import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge } from "antd";
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

const ConsultantData = () => {
  const context = useContext(RefContext);
  const {
    store: { consultantsList, detailOfConsultant },
    actions: { getConsultantsData, getDetailOfConsultant, addConsultant },
  } = context;

  const [displayConsultDetails, setDisplayConsultDetails] = useState(false);
  const [displayCreateConsultant, setDisplayCreateConsultant] = useState(false);

  useEffect(() => {
    getConsultantsData();
  }, []);

  const showDetails = () => {
    setDisplayConsultDetails(true);
  };

  const showCreate = () => {
    setDisplayConsultDetails(false);
    setDisplayCreateConsultant(true);
  };

  const handleClick = (num) => {
    getDetailOfConsultant(num);
    showDetails();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
              {/* <text>{TodayDate()}</text> */}
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
          <EditIcon style={{ fill: "#6041b8", height: "18px" }} />
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
            <AddCircleIcon
              style={{ float: "right" }}
              onClick={showCreate}
            ></AddCircleIcon>
          </Card1Header>
          <Table
            dataSource={consultantsList}
            columns={columns}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => {
                  handleClick(record.id);
                },
              };
            }}
          ></Table>
        </CardLeft>
      </CardLeftWrapper>

      <CardRightWrapper>
        <CardRightComp
          detailOfConsultant={detailOfConsultant}
          displayConsultDetails={displayConsultDetails}
          displayCreateConsultant={displayCreateConsultant}
          addConsultant={addConsultant}
        />
      </CardRightWrapper>
    </WrapperCard>
  );
};

export default ConsultantData;
