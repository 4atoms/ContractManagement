import React, { useState, useContext, useEffect } from "react";
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
  EditCardComp,
  SaveButton,
  CancelButton,
} from "Components/common.style";
import { themeColors } from "Config/theme";
import RefContext from "Utilities/refContext";
// import CreateCard from "./createCard";
let i = 2;
const CardRightComp = (props) => {
  useEffect(() => {}, [iterations, updateIterations]);
  let iterations = [0, 1];
  const updateIterations = (iterations) => {
    iterations.push(i);
    console.log("update", iterations);
    i++;
  };
  const context = useContext(RefContext);
  const {
    actions: { addSupplier },
  } = context;
  const FormForAdd = {
    name: "",
    point_of_contacts: [
      {
        name: "",
        email: "",
        phone: "",
      },
    ],
    organization_no: "",
  };
  const EditedSupplier = {
    name: "",
    point_of_contacts: [
      {
        name: "",
        email: "",
        phone: "",
      },
    ],
    organization_no: "",
  };

  const [name, setName] = useState("");

  const [companyId, setCompanyId] = useState("");
  const [pocName, setPocName] = useState("");
  const [pocEmail, setPocEmail] = useState("");
  const [pocNum, setPocNum] = useState("");
  const addSupplierTry = () => {
    FormForAdd.name = name;
    FormForAdd.organization_no = companyId;
    FormForAdd.point_of_contacts[0].name = pocName;
    FormForAdd.point_of_contacts[0].email = pocEmail;
    FormForAdd.point_of_contacts[0].phone = pocNum;
    console.log(FormForAdd);
    props.addSupplier(FormForAdd);
  };
  const editSupplierTry = () => {
    props.editSupplier();
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
                      {props.detailOfSupplier?.contract_summary?.to_be_renewed}
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

          {iterations.map((x) => {
            return (
              <div key={x}>
                <PointOfContactsDiv>
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
                </PointOfContactsDiv>
              </div>
            );
          })}
          <button
            onClick={() => {
              updateIterations(iterations);
            }}
          >
            add
          </button>

          <ButtonsDiv>
            <SaveButton>
              <button onClick={addSupplierTry}>
                <div>Save</div>
              </button>
            </SaveButton>
            <CancelButton>
              <button>
                <div>Cancel</div>
              </button>
            </CancelButton>
          </ButtonsDiv>
        </RightCardContent>
      </CreateCardComp>
      <EditCardComp
        displayEditSupplier={props.displayEditSupplier}
        detailOfSupplier={props.detailOfSupplier}
      >
        <RightCardContent>
          <SupplierName>
            Edit Supplier: {props.detailOfSupplier.name}
            {/* <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span> */}
          </SupplierName>
          <Line1 />
          <div>Name</div>
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={props.detailOfSupplier.name}
          />
          <div>Company ID</div>
          <input
            placeholder="xxyyzz##"
            onChange={(e) => setCompanyId(e.target.value)}
            value={props.detailOfSupplier.id}
          />
          <PointOfContacts>Point Of Contacts</PointOfContacts>

          <PointOfContactsDiv>
            <PointOfContactsInput
              placeholder="Name"
              onChange={(e) => setPocName(e.target.value)}
              value={props.detailOfSupplier.point_of_contacts?.[0]?.name}
            ></PointOfContactsInput>
            <PointOfContactsInput
              placeholder="Email"
              onChange={(e) => setPocEmail(e.target.value)}
              value={props.detailOfSupplier.point_of_contacts?.[0]?.email}
            ></PointOfContactsInput>
            <PointOfContactsInput
              placeholder="Phone No"
              onChange={(e) => setPocNum(e.target.value)}
              value={props.detailOfSupplier.point_of_contacts?.[0]?.phone}
            ></PointOfContactsInput>
            <DeleteForeverIcon
              style={{ fill: "red", height: "18px", marginTop: "5px" }}
            />
          </PointOfContactsDiv>

          <button onClick={updateIterations}>add</button>

          <ButtonsDiv>
            <button onClick={editSupplierTry}>Create</button>
            <button>Cancel</button>
          </ButtonsDiv>
        </RightCardContent>
      </EditCardComp>
    </CardRight>
  );
};

export default CardRightComp;
