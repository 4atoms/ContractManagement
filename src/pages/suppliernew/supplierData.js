import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Button, Input } from "antd";
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
import { themeColors } from "Config/theme";
import CardRightComp from "./cardRightComp";
const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier },
    actions: { getSupplierData, getDetailOfSupplier, addSupplier },
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayCreateSupplier, setDisplayCreateSupplier] = useState(false);

  useEffect(() => {
    getSupplierData();
  }, []);

  const showDetails = () => {
    setDisplayDetails(true);
    setDisplayCreateSupplier(false);
  };
  const showCreate = () => {
    setDisplayDetails(false);
    setDisplayCreateSupplier(true);
  };

  const handleClick = (num) => {
    getDetailOfSupplier(num);
    showDetails();
  };

  const columns = [
    {
      title: "Supplier Name",
      dataIndex: "name",
      key: "name",
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
              count={suppliersList.contract_summary?.to_be_renew}
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
      render: () => (
        <Space size="middle">
          <EditIcon style={{ fill: "#6041b8", height: "18px" }} />
          <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
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
            </Card1Header>
            <Table
              dataSource={suppliersList}
              columns={columns}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    handleClick(record.id);
                  },
                };
              }}
            ></Table>
          </CardLeft>
        </CardLeftWrapper>

        <CardRightWrapper>
          <CardRightComp
            detailOfSupplier={detailOfSupplier}
            displayDetails={displayDetails}
            displayCreateSupplier={displayCreateSupplier}
            addSupplier={addSupplier}
          />
          {/* <CreateCard
            detailOfSupplier={detailOfSupplier}
            displayCreateSupplier={displayCreateSupplier}
            displayDetails={displayDetails}
          /> */}
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
