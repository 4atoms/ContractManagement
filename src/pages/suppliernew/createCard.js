import React, { useState, useContext, useEffect } from "react";
import { Button, Table, Form, Space, Input } from "antd";
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

  const CreateCard = (props) => {
  const [form] = Form.useForm();

  const intialValue = {
    name: null,
    organisation_no: null,
    point_of_contacts: [{ name: null, email: null, phone: null }],
  };
  const onFinish = (values) => {
    setPoc(values.users);
    console.log("Received values of form:", values);
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

  const [companyId, setCompanyId] = useState("");
  const [poc, setPoc] = useState([]);

  const addSupplierTry = () => {
    FormForAdd.name = name;
    FormForAdd.organization_no = companyId;
    FormForAdd.point_of_contacts = poc;
    console.log(FormForAdd);
    props.addSupplier(FormForAdd);
  };
  const editSupplierTry = (supplier_id) => {
    FormForAdd.name = name;
    FormForAdd.organization_no = companyId;
    FormForAdd.point_of_contacts = poc;
    console.log(FormForAdd);
    props.editSupplier({ point_of_contacts: poc }, supplier_id);
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
  const [name, setName] = useState("");
  return (
    <CreateCardComp displayCreateSupplier={props.displayCreateSupplier}>
        <RightCardContent>
          <SupplierName>
            Create Supplier
            {/* <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon
                style={{ height: "18px" }}
                onClick={() => {
                  editSupplierTry(props.detailOfSupplier.id);
                }}
              />
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
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={props.detailOfSupplier || intialValue}
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "name"]}
                        fieldKey={[fieldKey, "name"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "email"]}
                        fieldKey={[fieldKey, "email"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "phone"]}
                        fieldKey={[fieldKey, "phone"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="Phone" />
                      </Form.Item>
                      <DeleteForeverIcon onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block>
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
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
  );
};

export default CreateCard;
