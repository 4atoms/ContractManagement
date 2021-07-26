import React, { useState, useContext } from "react";
import { Button, Progress, Table } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardRight,
  DisplayCardRight,
  RightCardContent,
  SupplierName,
  SupplierId,
  Line1,
  Contracts,
  CircularBarsContainer,
  Circle,
  CircleText,
  CircleNumber,
  SpaceBar,
  Consultants,
  CTitle,
  Tags,
  PointOfContacts,
  CreateCardComp,
  PointOfContactsDiv,
  PointOfContactsInput,
  ButtonsDiv,
} from "Components/common.style";
import { themeColors } from "Config/theme";
import RefContext from "Utilities/refContext";
// import CreateCard from "./createCard";
const CardRightComp = (props) => {
  const context = useContext(RefContext);
  const {
    actions: { addSupplier},
  } = context;
  const FormForAdd = {
    name: "",
    contact_person: "",
    email: "",
    phone: "",
  };

  const [name, setName] = useState("");

  const [companyId, setCompanyId] = useState("");
  const [pocName, setPocName] = useState("");
  const [pocEmail, setPocEmail] = useState("");
  const [pocNum, setPocNum] = useState("");
  const addSupplierTry = () => {
    FormForAdd.name = name;
    FormForAdd.contact_person = pocName;
    FormForAdd.email = pocEmail;
    FormForAdd.phone = pocNum;
    console.log(FormForAdd);
  };
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
    <CardRight>
      <DisplayCardRight displayDetails={props.displayDetails}>
        <RightCardContent>
          <SupplierName>
            {props.detailOfSupplier.name}
            <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span>
          </SupplierName>
          <SupplierId>{props.detailOfSupplier.organization_no}</SupplierId>
          <Line1 />
          <Contracts>Contracts</Contracts>

          <CircularBarsContainer>
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                style={{ maxWidth: "100%" }}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.ongoing}
                    </CircleNumber>
                    <CircleText>Ongoing</CircleText>
                  </div>
                )}
                strokeColor={themeColors.greenSuccess}
              />
            </Circle>
            <SpaceBar />
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                style={{ maxWidth: "100%" }}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.to_be_renew}
                    </CircleNumber>
                    <CircleText>To Renew</CircleText>
                  </div>
                )}
                strokeColor={themeColors.orangeWarning}
              />
            </Circle>
            <SpaceBar />
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                style={{ maxWidth: "100%" }}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.upcoming}
                    </CircleNumber>
                    <CircleText>Upcoming</CircleText>
                  </div>
                )}
                strokeColor={themeColors.blueInfo}
              />
            </Circle>
            <SpaceBar />
            <Circle>
              <Progress
                type="circle"
                percent={100}
                width={90}
                format={() => (
                  <div>
                    <CircleNumber>
                      {props.detailOfSupplier?.contract_summary?.expired}
                    </CircleNumber>
                    <CircleText>Expired</CircleText>
                  </div>
                )}
                strokeColor={themeColors.redDanger}
              />
            </Circle>
          </CircularBarsContainer>
          <Consultants>
            <CTitle>
              Consultants ({props.detailOfSupplier.consultants?.length})
            </CTitle>
            <Tags>
              {props.detailOfSupplier.consultants?.map((x) => {
                return <div key={x.id}>{x.name}</div>;
              })}
            </Tags>
          </Consultants>
          <PointOfContacts>
            <div>Point of Contacts</div>
            <Table
              dataSource={props.detailOfSupplier.point_of_contacts}
              pagination={{ position: ["none", "none"] }}
              columns={columns2}
            ></Table>
          </PointOfContacts>
        </RightCardContent>
      </DisplayCardRight>
      <CreateCardComp displayCreateSupplier={props.displayCreateSupplier}>
        <RightCardContent>
          <SupplierName>
            Create Supplier
            {/* <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span> */}
          </SupplierName>
          <Line1 />
          <div>Name</div>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <div>Company ID</div>
          <input
            placeholder="xxyyzz##"
            onChange={(e) => setCompanyId(e.target.value)}
          />
          <PointOfContacts>Point Of Contacts</PointOfContacts>
          <PointOfContactsDiv>
            <div>
              <PointOfContactsInput
                placeholder="Name"
                onChange={(e) => setPocName(e.target.value)}
              ></PointOfContactsInput>
              <PointOfContactsInput
                placeholder="Email"
                onChange={(e) => setPocEmail(e.target.value)}
              ></PointOfContactsInput>
              <PointOfContactsInput
                placeholder="Phone No"
                onChange={(e) => setPocNum(e.target.value)}
              ></PointOfContactsInput>
              <DeleteForeverIcon
                style={{ fill: "red", height: "18px", marginTop: "5px" }}
              />
            </div>
          </PointOfContactsDiv>
          <ButtonsDiv>
            <button onClick={addSupplier}>Add</button>
            <button>Cancel</button>
          </ButtonsDiv>
        </RightCardContent>
      </CreateCardComp>
    </CardRight>
  );
};

export default CardRightComp;
