import React, { useState, useContext, useEffect } from "react";
import { Button, Progress, Table } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import CircleComponent from "Components/circleComponent";
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
const CardRightComp = (props) => {
  useEffect(() => {}, []);
  const updateIterations = () => {
    return (
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
    );
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
  // const EditedSupplier = {
  //   name: "",
  //   point_of_contacts: [
  //     {
  //       name: "",
  //       email: "",
  //       phone: "",
  //     },
  //   ],
  //   organization_no: "",
  // };

  const [name, setName] = useState("");

  const [companyId, setCompanyId] = useState("");
  const [pocName, setPocName] = useState("");
  const [pocEmail, setPocEmail] = useState("");
  const [pocNum, setPocNum] = useState("");
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState();
  const point = `<PointOfContactsDiv>
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
</PointOfContactsDiv>`;

  const displayInputfields = () => {
    setCount(count + 1);
    console.log(count);
    for (let i = 0; i <= count; i++) {
      setPoints(updateIterations());
    }
    console.log("entered");
  };

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
    FormForAdd.name = name;
    FormForAdd.organization_no = companyId;
    FormForAdd.point_of_contacts[0].name = pocName;
    FormForAdd.point_of_contacts[0].email = pocEmail;
    FormForAdd.point_of_contacts[0].phone = pocNum;
    console.log(FormForAdd);
    props.editSupplier(FormForAdd);
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
            <CircleComponent
              number={props.detailOfSupplier?.contract_summary?.ongoing}
              text="Ongoing"
              color={themeColors.greenSuccess}
            />
            <CircleComponent
              number={props.detailOfSupplier?.contract_summary?.to_be_renewed}
              text="To Renew"
              color={themeColors.orangeWarning}
            />
            <CircleComponent
              number={props.detailOfSupplier?.contract_summary?.upcoming}
              text="Upcoming"
              color={themeColors.blueInfo}
            />
            <CircleComponent
              number={props.detailOfSupplier?.contract_summary?.expired}
              text="Expired"
              color={themeColors.redDanger}
            />
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
          <div>{points}</div>
          <button
            onClick={() => {
              displayInputfields();
            }}
          >
            Add
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
        <RightCardContent key={props.detailOfSupplier.id}>
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
            defaultValue={props.detailOfSupplier.name}
          />
          <div>Company ID</div>
          <input
            placeholder="xxyyzz##"
            onChange={(e) => setCompanyId(e.target.value)}
            defaultValue={props.detailOfSupplier.id}
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
            <SaveButton>
              <button onClick={editSupplierTry()}>
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
      </EditCardComp>
    </CardRight>
  );
};

export default CardRightComp;
