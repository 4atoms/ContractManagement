import React, { useState, useContext } from "react";
import { Table, Form } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import CircleComponent from "Components/circleComponent";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
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
} from "Components/common.style";
import { themeColors } from "Config/theme";
import RefContext from "Utilities/refContext";
const DisplayCard = (props) => {
  const [form] = Form.useForm();

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

  const [poc, setPoc] = useState([]);
  const [companyId, setCompanyId] = useState([]);
  const [name, setName] = useState([]);

  const addSupplierTry = () => {
    FormForAdd.name = name;
    FormForAdd.organization_no = companyId;
    FormForAdd.point_of_contacts = poc;
    console.log(FormForAdd);
    addSupplier(FormForAdd);
  };
  const editSupplierTry = (supplier_id) => {
    FormForAdd.name = name;
    FormForAdd.organization_no = companyId;
    FormForAdd.point_of_contacts = poc;
    console.log(FormForAdd);
    editSupplier({ point_of_contacts: poc }, supplier_id);
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
    <DisplayCardRight
      detailOfSupplier={props.detailOfSupplier}
      displayDetails={props.displayDetails}
      displayEditSupplier={props.displayEditSupplier}
    >
      <RightCardContent>
        <SupplierName>
          {props.detailOfSupplier?.name}
          <span style={{ position: "absolute", right: "20px", top: "20px" }}>
            <EditIcon
              style={{ height: "18px" }}
              onClick={() => {
                editSupplierTry(props.detailOfSupplier.id);
              }}
            />
            <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
          </span>
        </SupplierName>
        <SupplierId>{props.detailOfSupplier?.organization_no}</SupplierId>
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
          <CTitle>Consultants ({props.detailOfSupplier?.consultants?.length})</CTitle>
          <Tags>
            {props.detailOfSupplier?.consultants?.map((x) => {
              return <div key={x.id}>{x.name}</div>;
            })}
          </Tags>
        </Consultants>
        <PointOfContacts>
          <div>Point of Contacts</div>
          <Table
            dataSource={props.detailOfSupplier?.point_of_contacts}
            pagination={{ position: ["none", "none"] }}
            columns={columns2}
          ></Table>
        </PointOfContacts>
      </RightCardContent>
    </DisplayCardRight>
  );
};
export default DisplayCard;
