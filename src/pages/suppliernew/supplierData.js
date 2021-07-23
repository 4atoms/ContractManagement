import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Button } from "antd";
import AddCircleIcon from '@material-ui/icons/AddCircle';
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

const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier },
    actions: { getSupplierData, getDetailOfSupplier },
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);

  useEffect(() => {
    getSupplierData();
  }, []);

  const showDetails = () => {
    setDisplayDetails(true);
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
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Total Consultants",
      key: "totalconsultants",
      render: () => (
        <Space size="middle">{suppliersList[0].consultants.length}</Space>
      ),
    },
    {
      title: (
        <>
          <div style={{ color: "red" }}>Contract Status</div>
          <div
            style={{
              width: "150px",
              fontSize: "10px",
            }}
          >
            Ongoing/To renew/Upcoming
          </div>
        </>
      ),
      key: "contractstatus",
      render: () => (
        <Space size="middle">
          <Badge count={0} showZero />
          <Badge
            count={detailOfSupplier.summary?.upcoming?.length}
            showZero
            className="site-badge-count-4"
          />
          <Badge count={4} showZero className="site-badge-count-4" />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "view",
      render: (supplierssList) => (
        <Space size="middle">
          <EditIcon onClickCapture={() => handleClick(supplierssList.id)} />
          <DeleteForeverIcon onClick={() => console.log("Delete Clicked")} />
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
                onClick={() => setdisplayCreateSupplier(true)}
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
          />
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
