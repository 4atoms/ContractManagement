import React, { useContext, useEffect, useState } from "react";
import { Progress } from "antd";
import { Table, Space, Badge, Button, Input } from "antd";
import RefContext from "Utilities/refContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardRight,
  CardLeft,
  WrapperCard,
  SpaceBar,
  CircularBarsContainer,
  DisplayCardRight,
  DisplayCardRight2,
  RightCardContent,
  Consultants,
  CTitle,
  Contracts,
  SupplierName,
  SupplierId,
  Line1,
  PointOfContacts,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
  Tags,
} from "Components/common.style";
import { themeColors } from "Config/theme";

const SupplierData = () => {
  const context = useContext(RefContext);
  const {
    store: { suppliersList, detailOfSupplier },
    actions: { getSupplierData, getDetailOfSupplier },
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayCreateSupplier, setdisplayCreateSupplier] = useState(false);

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
    // {
    //   title: "Status",
    //   children: [
    //     {
    //       title: "Ongoing",
    //       key: "ongoing",
    //       render: () => (
    //         <Space size="middle">
    //           <Badge count={0} showZero />
    //         </Space>
    //       ),
    //     },
    //     {
    //       title: "ToRenew",
    //       key: "torenew",
    //       render: () => (
    //         <Space size="middle">
    //           <Badge count={0} showZero />
    //         </Space>
    //       ),
    //     },
    //     {
    //       title: "Upcoming",
    //       key: "upcoming",
    //       render: () => (
    //         <Space size="middle">
    //           <Badge
    //             count={detailOfSupplier.summary?.upcoming?.length}
    //             showZero
    //             className="site-badge-count-4"
    //           />
    //         </Space>
    //       ),
    //     },
    //   ],
    // },
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
  const columns2 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Number",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  return (
    <>
      <WrapperCard>
        <CardLeftWrapper>
          <CardLeft>
            <Card1Header>
              <text>Suppliers</text>
              <Button
                type="primary"
                shape="circle"
                onClick={() => setdisplayCreateSupplier(true)}
              >
                +
              </Button>
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
          <CardRight>
            <DisplayCardRight displayDetails={displayDetails}>
              <RightCardContent>
                <SupplierName>{detailOfSupplier.name}</SupplierName>
                <SupplierId>{detailOfSupplier.id}</SupplierId>
                <Line1 />
                <Contracts>Contracts</Contracts>

                <CircularBarsContainer>
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.ongoing?.length}  Ongoing`
                    }
                    strokeColor={themeColors.greenSuccess}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() => "2  To Renew"}
                    strokeColor={themeColors.orangeWarning}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.upcoming?.length} Upcoming`
                    }
                    strokeColor={themeColors.blueInfo}
                  />
                  <SpaceBar />
                  <Progress
                    type="circle"
                    percent={100}
                    width={110}
                    format={() =>
                      `${detailOfSupplier?.summary?.expired?.length}  Expired`
                    }
                    strokeColor={themeColors.redDanger}
                  />
                </CircularBarsContainer>
                <Consultants>
                  <CTitle>
                    Consultants ({detailOfSupplier.consultants?.length})
                  </CTitle>
                  <Tags>
                    {detailOfSupplier.consultants?.map((x) => {
                      return <div key={x.id}>{x.name}</div>;
                    })}
                  </Tags>
                </Consultants>
                <PointOfContacts>Point of Contacts</PointOfContacts>
                <Table
                  dataSource={detailOfSupplier.point_of_contacts}
                  pagination={{ position: ["none", "none"] }}
                  columns={columns2}
                ></Table>
              </RightCardContent>
            </DisplayCardRight>

            {/* Create Supplier Card */}
            <DisplayCardRight2 displayCreateSupplier={displayCreateSupplier}>
              <RightCardContent>
                <SupplierName>
                  <text>Create Supplier</text>
                </SupplierName>
                <Line1 />
                Name
                <Input placeholder="Name" />
                Company ID
                <Input placeholder="xxyyzz##" />
                {/* Point of Contacts
                <div></div>
                <div></div> */}
              </RightCardContent>
            </DisplayCardRight2>
          </CardRight>
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default SupplierData;
