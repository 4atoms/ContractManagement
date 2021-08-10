import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  Badge,
  Select,
  DatePicker,
  Space,
  Form,
  AutoComplete,
} from "antd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardRight,
  DisplayCardRight3,
  RightCardContent,
  SupplierName,
  Line1,
  CommonButton,
  EmailMobileSupplier,
  Email,
  Mobile,
  Supplier,
  ConsultantName,
  ActiveUpcomingExpiredContract,
  ActiveContractParts,
  ActiveContractSubParts,
  UpcomingContractParts,
  UpcomingContractSubParts,
  LightColor,
  CreateConsultantCardComp,
  NameEmail,
  MobileSupplier,
  Flex50,
  ButtonsDiv,
  EditConsultantCardComp,
  DisplayContractCardComp,
} from "Components/common.style";
import {
  dateFormatStandard,
  dateFormatStandard2,
} from "../../utilities/helpers";

const dateFormat = "DD/MM/YYYY";

const { Option } = Select;

const onFocus = () => {
  console.log("focus");
};

const onSearch = (val) => {
  console.log("search:", val);
};
const CardRightComp = (props) => {
  //Consultant Create API

  const [form] = Form.useForm();

  const FormForAdd = {
    name: "",
    email: "",
    phone: "",
    supplier: "",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [start_date, setStart_date] = useState("");
  const [supplier, setSupplier] = useState("");
  // const [companyId, setCompanyId] = useState("");
  const [contractwithexistingconsultant, setcontractwithexistingconsultant] =
    useState(false);
  const addConsultantTry = () => {
    let project_number = project_name?.toUpperCase();
    FormForAdd.name = name;
    FormForAdd.email = email;
    FormForAdd.phone = phone;
    FormForAdd.supplier = supplier;

    FormForAdd2.supplier = supplier;
    FormForAdd2.consultant.name = name;
    FormForAdd2.consultant.email = email;
    FormForAdd2.consultant.phone = phone;
    FormForAdd2.client = client;
    FormForAdd2.project = project;
    FormForAdd2.cost_center = cost_center;
    FormForAdd2.start_date = start_date;
    FormForAdd2.period = period;
    FormForAdd2.role = role;
    FormForAdd2.currency = currency;
    FormForAdd2.cost_per_hour = cost_per_hour;

    FormForAdd3.supplier = supplier;
    FormForAdd3.consultant.name = name;
    FormForAdd3.consultant.email = email;
    FormForAdd3.consultant.phone = phone;
    FormForAdd3.client.name = client_name;
    FormForAdd3.client.organization_no = organization_no;
    FormForAdd3.project.project_name = project_name;
    FormForAdd3.project.project_number = project_number;
    FormForAdd3.cost_center = cost_center;
    FormForAdd3.start_date = start_date;
    FormForAdd3.period = period;
    FormForAdd3.role = role;
    FormForAdd3.currency = currency;
    FormForAdd3.cost_per_hour = cost_per_hour;

    FormForAdd4.supplier = supplier;
    FormForAdd4.consultant.name = name;
    FormForAdd4.consultant.email = email;
    FormForAdd4.consultant.phone = phone;
    FormForAdd4.client = client;
    FormForAdd4.project.project_name = project_name;
    FormForAdd4.project.project_number = project_number;
    FormForAdd4.cost_center = cost_center;
    FormForAdd4.start_date = start_date;
    FormForAdd4.period = period;
    FormForAdd4.role = role;
    FormForAdd4.currency = currency;
    FormForAdd4.cost_per_hour = cost_per_hour;

    console.log(
      supplier,
      name,
      email,
      phone,
      client,
      project,
      cost_center,
      start_date,
      period,
      role,
      currency,
      cost_per_hour,
      client_name,
      project_name,
      project_number,
      organization_no
    );

    console.log(
      client_name,
      project_name,
      organization_no,
      supplier,
      cost_center,
      start_date,
      period,
      role,
      currency,
      cost_per_hour,
      "Checking",
      contractwithexistingconsultant
    );
    if (contractwithexistingconsultant) {
      FormForAdd4.consultant = props.detailOfConsultant.id;
      FormForAdd3.consultant = props.detailOfConsultant.id;
      FormForAdd2.consultant = props.detailOfConsultant.id;
      FormForAdd4.supplier = props.detailOfConsultant.supplier.id;
      FormForAdd3.supplier = props.detailOfConsultant.supplier.id;
      FormForAdd2.supplier = props.detailOfConsultant.supplier.id;
      if (
        client &&
        project_name &&
        !client_name &&
        cost_center &&
        start_date &&
        period &&
        role &&
        currency &&
        cost_per_hour
      ) {
        console.log("Form For Add4", FormForAdd4);
        props.addConsultantwithContract(FormForAdd4);
      } else if (
        client_name &&
        project_name &&
        organization_no &&
        cost_center &&
        start_date &&
        period &&
        role &&
        currency &&
        cost_per_hour
      ) {
        console.log("Form For Add3", FormForAdd3);
        props.addConsultantwithContract(FormForAdd3);
      } else if (
        client &&
        project &&
        cost_center &&
        start_date &&
        period &&
        role &&
        currency &&
        cost_per_hour
      ) {
        console.log("Form For Add2", FormForAdd2);
        props.addConsultantwithContract(FormForAdd2);
      }
    } else {
      if (
        client &&
        project_name &&
        !client_name &&
        supplier &&
        name &&
        email &&
        phone &&
        cost_center &&
        start_date &&
        period &&
        role &&
        currency &&
        cost_per_hour
      ) {
        console.log("Form For Add4", FormForAdd4);
        props.addConsultantwithContract(FormForAdd4);
      } else if (
        client_name &&
        project_name &&
        organization_no &&
        supplier &&
        name &&
        email &&
        phone &&
        cost_center &&
        period &&
        role &&
        currency &&
        cost_per_hour
      ) {
        console.log("Form For Add3", FormForAdd3);
        props.addConsultantwithContract(FormForAdd3);
      } else if (
        supplier &&
        name &&
        email &&
        phone &&
        client &&
        project &&
        cost_center &&
        start_date &&
        period &&
        role &&
        currency &&
        cost_per_hour
      ) {
        console.log("Form For Add2", FormForAdd2);
        props.addConsultantwithContract(FormForAdd2);
      } else if (name && email && phone && supplier) {
        console.log("Form for Add", FormForAdd);
        props.addConsultant(FormForAdd);
      }
    }
  };

  //Contract Create API
  const FormForAdd2 = {
    supplier: "",
    consultant: {
      name: "",
      email: "",
      phone: "",
    },
    client: "",
    project: "",
    cost_center: "",
    start_date: "",
    period: "",
    role: "",
    currency: "",
    cost_per_hour: "",
  };

  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [cost_center, setCost_center] = useState("");
  const [period, setPeriod] = useState("");
  const [role, setRole] = useState("");
  const [currency, setCurrency] = useState("");
  const [cost_per_hour, setCost_per_hour] = useState("");

  const [projectList, setProjectList] = useState([]);

  //Client and Project Simultaneous Creation API
  const FormForAdd3 = {
    supplier: "",
    consultant: {
      name: "",
      email: "",
      phone: "",
    },
    client: {
      name: "",
      organization_no: "",
    },
    project: {
      project_name: "",
      project_number: "",
    },
    cost_center: "",
    start_date: "",
    period: "",
    role: "",
    currency: "",
    cost_per_hour: "",
  };
  const [client_name, setClient_name] = useState("");
  const [organization_no, setOrganization_no] = useState("");
  const [project_name, setProject_name] = useState("");

  //Client already Created -> new Project Creation API
  const FormForAdd4 = {
    supplier: "",
    consultant: {
      name: "",
      email: "",
      phone: "",
    },
    client: "",
    project: {
      project_name: "",
      project_number: "",
    },
    cost_center: "",
    start_date: "",
    period: "",
    role: "",
    currency: "",
    cost_per_hour: "",
  };

  const editAndUpdateConsultant = (formData) => {
    let request = formData;
    delete request.supplier;
    if (Object.keys(request).length) {
      console.log(request);
      props
        .updateConsultant(request, props.detailOfConsultant.id)
        .then(() => props.showDetails());
    } else {
      props.showDetails();
    }
  };

  const NoExpiredContractButton = (props) => {
    if (props.detailOfConsultant.contracts?.expired?.length == 0) {
      console.log("Expired");
      return <button>No expired contracts </button>;
    } else {
      return (
        <Table
          dataSource={props.detailOfConsultant.contracts?.expired}
          pagination={{ position: ["none", "none"] }}
          showHeader={false}
          columns={columns2}
        ></Table>
      );
    }
  };

  const NoActiveContractButton = () => {
    if (props.detailOfConsultant.contracts?.active?.length == 0) {
      console.log("No Active Contracts");
      return (
        <button
          onClick={() => {
            props.showCreateContract();
            console.log("State", props.displayConsultDetails);
            setcontractwithexistingconsultant(true);
          }}
        >
          Click here to add new contract
        </button>
      );
    } else {
      return (
        <ActiveContractParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>Client</text>
            </LightColor>
            <div>
              <text>
                {props.detailOfConsultant.contracts?.active?.[0]?.client?.name}
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>Project</text>
            </LightColor>
            <div>
              <text>
                {
                  props.detailOfConsultant.contracts?.active?.[0]?.project
                    ?.project_name
                }
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>Role</text>
            </LightColor>
            <div>
              <text>
                {props.detailOfConsultant.contracts?.active?.[0]?.role}
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>Cost Center</text>
            </LightColor>
            <div>
              <text>
                {props.detailOfConsultant.contracts?.active?.[0]?.cost_center}
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>Start Date</text>
            </LightColor>
            <div>
              <text>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.active?.[0]?.start_date
                )}
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>End Date</text>
            </LightColor>
            <div>
              <text>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.active?.[0]?.end_date
                )}
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <text>Cost//hr</text>
            </LightColor>
            <div>
              <text>
                {props.detailOfConsultant.contracts?.active?.[0]?.cost_per_hour}
              </text>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts></ActiveContractSubParts>
        </ActiveContractParts>
      );
    }
  };

  const NoUpcomingContractButton = (props) => {
    if (props.detailOfConsultant.contracts?.upcoming?.length == 0) {
      console.log("Upcoming");
      return <button>No upcoming contracts</button>;
    } else {
      return (
        <UpcomingContractParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>Client</text>
            </LightColor>
            <div>
              <text>
                {
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.client
                    ?.name
                }
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>Project</text>
            </LightColor>
            <div>
              <text>
                {
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.project
                    ?.project_name
                }
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>Role</text>
            </LightColor>
            <div>
              <text>
                {props.detailOfConsultant.contracts?.upcoming?.[0]?.role}
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>Cost Center</text>
            </LightColor>
            <div>
              <text>
                {props.detailOfConsultant.contracts?.upcoming?.[0]?.cost_center}
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>Start Date</text>
            </LightColor>
            <div>
              <text>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.start_date
                )}
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>End Date</text>
            </LightColor>
            <div>
              <text>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.end_date
                )}
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <text>Cost/hr</text>
            </LightColor>
            <div>
              <text>
                {
                  props.detailOfConsultant.contracts?.upcoming?.[0]
                    ?.cost_per_hour
                }
              </text>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <button>Cancel</button>
          </UpcomingContractSubParts>
        </UpcomingContractParts>
      );
    }
  };

  const clientSelection = (value) => {
    // setClient(value);
    console.log("ClientID", value);
    if (typeof value == "string") {
      setClient_name(value);
      setClient(null);
    } else {
      setClient(value.id);
      setClient_name(null);
    }
  };

  const ProjectSelection = (value) => {
    console.log("ProjectID", value);
    if (typeof value == "string") {
      setProject_name(value);
      setProject(null);
    } else {
      setProject(value.id);
      setProject_name(null);
    }
  };

  useEffect(() => {
    props.clientsList.forEach((clnt) => {
      console.log(clnt.id == client, client, clnt);
      if (clnt.id == client) {
        setProjectList(clnt.projects);
        setOrganization_no(clnt.organization_no);
      }
      console.log("Projectlist", projectList);
    });
    if (!client) {
      setProjectList([]);
      setOrganization_no(null);
    }
  }, [client]);

  useEffect(() => {
    if (props.detailOfConsultant) {
      form.setFieldsValue(props.detailOfConsultant);
    }
  }, [props.detailOfConsultant]);

  const columns2 = [
    {
      title: "Client",
      key: "client",
      render: (expireddata) => (
        <Space size="middle">{expireddata.client.name}</Space>
      ),
    },
    {
      title: "Project",
      key: "project",
      render: (expireddata) => (
        <>
          <div>
            <Space size="middle">{expireddata.project.project_name}</Space>
          </div>
          <div>
            <Space size="middle">{expireddata.role}</Space>
          </div>
        </>
      ),
    },
    {
      title: "StartDate - End Date",
      key: "startdate_enddate",
      render: (expireddata) => (
        <>
          <div>
            {dateFormatStandard(expireddata.start_date)} -{" "}
            {dateFormatStandard(expireddata.end_date)}
          </div>
          <div>EUR {expireddata.cost_per_hour}/hr</div>
        </>
      ),
    },
  ];

  const renderEditForm = () => {
    return (
      <Form onFinish={editAndUpdateConsultant} form={form}>
        <Form.Item name={["name"]} label="Name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name={["email"]} label="Email">
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item name={["phone"]} label="Phone">
          <Input placeholder="phone" />
        </Form.Item>
        <Form.Item name={["supplier", "name"]} label="Supplier">
          <Input placeholder="supplier" disabled={true} />
        </Form.Item>
      </Form>
    );
  };

  return (
    <CardRight>
      <DisplayCardRight3 displayConsultDetails={props.displayConsultDetails}>
        <RightCardContent>
          <ConsultantName>
            {props.detailOfConsultant.name}
            <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon
                className="cursorPointer"
                onClick={() => {
                  props.showEdit(props.detailOfConsultant.id);
                }}
                style={{ height: "18px" }}
              />
              <DeleteForeverIcon
                className="cursorPointer"
                style={{ fill: "red", height: "18px" }}
                onClick={() => {
                  props.setDeleteContractDetail(props.detailOfConsultant);
                  props.setDeleteModalOpen(true);
                }}
              />
            </span>
          </ConsultantName>
          {/* <Consultants></Consultants> */}
          <EmailMobileSupplier>
            <Email>
              <LightColor>
                <text>Email</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant.email}</text>
              </div>
            </Email>
            <Mobile>
              <LightColor>
                <text>Mobile</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant.phone}</text>
              </div>
            </Mobile>
            <Supplier>
              <LightColor>
                <text>Supplier</text>
              </LightColor>
              <div>
                <text>{props.detailOfConsultant?.supplier?.name}</text>
              </div>
            </Supplier>
          </EmailMobileSupplier>
          <Line1 />

          {/* Active Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="success" />
            <text>Active Contract</text>
            <div>{NoActiveContractButton()}</div>
          </ActiveUpcomingExpiredContract>
          <Line1 />

          {/* Upcoming Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="processing" />
            <text>Upcoming Contract</text>
            <div>{NoUpcomingContractButton(props)}</div>
          </ActiveUpcomingExpiredContract>
          <Line1 />

          {/* Expired Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="error" />
            <text>Expired Contract</text>
            <div>{NoExpiredContractButton(props)}</div>
          </ActiveUpcomingExpiredContract>
        </RightCardContent>
      </DisplayCardRight3>

      {/* Create Consultant Card */}
      <CreateConsultantCardComp
        displayCreateConsultant={props.displayCreateConsultant}
      >
        <RightCardContent>
          <SupplierName>Create Consultant</SupplierName>
          <Line1 />
          <NameEmail>
            <Flex50>
              <text>Name</text>
              <Input
                style={{ width: 180 }}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Email</text>
              <Input
                style={{ width: 180 }}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex50>
          </NameEmail>
          <MobileSupplier>
            <Flex50>
              <text>Mobile</text>
              <Input
                style={{ width: 180 }}
                placeholder="Mobile"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Supplier</text>
              <br></br>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select a Supplier"
                optionFilterProp="children"
                onChange={(value) => setSupplier(value)}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                {props.suppliersList.map((element) => {
                  return (
                    <Option key={element.id} value={element.id}>
                      {element.name}
                    </Option>
                  );
                })}
                {/* <Option value="lucy">Lucy</Option> */}
              </Select>
            </Flex50>
          </MobileSupplier>
          Create Contract(Optional)
          <MobileSupplier>
            <Flex50>
              <text>Client</text>
              <br></br>
              <AutoComplete
                style={{
                  width: 180,
                }}
                optionFilterProp="children"
                // onSearch={(value) => onClientSearch(value)}
                onChange={(value) => clientSelection(value)}
                onSelect={(value, options) =>
                  clientSelection({ id: options.id, value })
                }
                placeholder="Enter Client"
                filterOption={(inputValue, option) => {
                  return (
                    option.key
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  );
                }}
              >
                {props.clientsList.map((element) => {
                  return (
                    <Option
                      key={element.name}
                      id={element.id}
                      value={element.name}
                    >
                      {element.name}
                    </Option>
                  );
                })}
              </AutoComplete>
            </Flex50>
            <Flex50>
              <text>Project</text>
              <br></br>
              <AutoComplete
                style={{
                  width: 180,
                }}
                optionFilterProp="children"
                optionLabelProp="title"
                onChange={(value) => ProjectSelection(value)}
                onSelect={(value, options) =>
                  ProjectSelection({ id: options.id, value })
                }
                placeholder="Select Project Demo"
                onSearch={onSearch}
                filterOption={(inputValue, option) => {
                  return (
                    option.key
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  );
                }}
              >
                {projectList.map((element) => {
                  return (
                    <Option
                      key={element.id}
                      id={element.id}
                      value={element.project_name}
                    >
                      {element.project_name}
                    </Option>
                  );
                })}
              </AutoComplete>
            </Flex50>
            <Flex50>
              <text>Organization ID</text>
              <Input
                style={{ width: 180 }}
                placeholder="Organization ID"
                onChange={(e) => setOrganization_no(e.target.value)}
                disabled={client_name == null}
                value={organization_no}
              />
            </Flex50>
            <Flex50>
              <text>Role</text>
              <Input
                style={{ width: 180 }}
                placeholder="Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Start Date</text>
              <Space direction="vertical" size={18}>
                <DatePicker
                  style={{ width: 180 }}
                  // defaultValue={moment("01/01/2015", dateFormat)}
                  //onChange={(value) => setStart_date(value)}
                  format={dateFormat}
                  onChange={(e) => setStart_date(dateFormatStandard2(e))}
                />
              </Space>
            </Flex50>
            <Flex50>
              <text>Period</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Period"
                optionFilterProp="children"
                onFocus={onFocus}
                onSearch={onSearch}
                onChange={(value) => setPeriod(value)}
              >
                <Option value={6}>6</Option>
                <Option value={12}>12</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost Center</text>
              <Input
                style={{ width: 180 }}
                placeholder="Cost Center"
                onChange={(e) => setCost_center(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Currency</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Currency"
                optionFilterProp="children"
                onFocus={onFocus}
                onSearch={onSearch}
                onChange={(value) => setCurrency(value)}
              >
                <Option value="EURO">EURO</Option>
                <Option value="INR">INR</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost/hr</text>
              <Input
                style={{ width: 180 }}
                placeholder="Cost/hr"
                onChange={(e) => setCost_per_hour(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <br></br>
              <CommonButton
                style={{ width: 90 }}
                onClick={() => addConsultantTry()}
                type="primary"
              >
                Save
              </CommonButton>
              <CommonButton style={{ width: 90 }}>Cancel</CommonButton>
            </Flex50>
          </MobileSupplier>
        </RightCardContent>
      </CreateConsultantCardComp>

      {/* Edit Consultant Card */}
      <EditConsultantCardComp
        displayEditConsultant={props.displayEditConsultant}
        detailOfConsultant={props.detailOfConsultant}
      >
        <RightCardContent>
          <ConsultantName>
            Edit Consultant: {props.detailOfConsultant.name}
          </ConsultantName>
          <Line1 />
          {renderEditForm(props.detailOfConsultant)}

          <ButtonsDiv>
            <CommonButton onClick={() => form.submit()} type="primary">
              Update
            </CommonButton>
            <CommonButton onClick={() => props.showDetails()}>
              Cancel
            </CommonButton>
          </ButtonsDiv>
        </RightCardContent>
      </EditConsultantCardComp>

      {/* Create Contract Card */}
      <DisplayContractCardComp
        displayCreateContract={props.displayCreateContract}
      >
        <RightCardContent>
          <ConsultantName>
            <text>Create Contract for {props.detailOfConsultant?.name} </text>
          </ConsultantName>
          <Line1></Line1>
          <MobileSupplier>
            <Flex50>
              <text>Client</text>
              <br></br>
              <AutoComplete
                style={{
                  width: 180,
                }}
                optionFilterProp="children"
                onChange={(value) => clientSelection(value)}
                onSelect={(value, options) =>
                  clientSelection({ id: options.id, value })
                }
                placeholder="Enter Client"
                filterOption={(inputValue, option) => {
                  return (
                    option.key
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  );
                }}
              >
                {props.clientsList.map((element) => {
                  return (
                    <Option
                      key={element.name}
                      id={element.id}
                      value={element.name}
                    >
                      {element.name}
                    </Option>
                  );
                })}
              </AutoComplete>
            </Flex50>
            <Flex50>
              <text>Project</text>
              <br></br>
              <AutoComplete
                style={{
                  width: 180,
                }}
                optionFilterProp="children"
                optionLabelProp="title"
                onChange={(value) => ProjectSelection(value)}
                onSelect={(value, options) =>
                  ProjectSelection({ id: options.id, value })
                }
                placeholder="Select Project Demo"
                onSearch={onSearch}
                filterOption={(inputValue, option) => {
                  return (
                    option.key
                      .toUpperCase()
                      .indexOf(inputValue.toUpperCase()) !== -1
                  );
                }}
              >
                {projectList.map((element) => {
                  return (
                    <Option
                      key={element.id}
                      id={element.id}
                      value={element.project_name}
                    >
                      {element.project_name}
                    </Option>
                  );
                })}
              </AutoComplete>
            </Flex50>
            <Flex50>
              <text>Organization ID</text>
              <Input
                style={{ width: 180 }}
                placeholder="Organization ID"
                onChange={(e) => setOrganization_no(e.target.value)}
                disabled={client_name == null}
                value={organization_no}
              />
            </Flex50>
            <Flex50>
              <text>Role</text>
              <Input
                style={{ width: 180 }}
                placeholder="Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Start Date</text>
              <Space direction="vertical" size={18}>
                <DatePicker
                  style={{ width: 180 }}
                  // defaultValue={moment("01/01/2015", dateFormat)}
                  //onChange={(value) => setStart_date(value)}
                  format={dateFormat}
                  onChange={(e) => setStart_date(dateFormatStandard2(e))}
                />
              </Space>
            </Flex50>
            <Flex50>
              <text>Period</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Period"
                optionFilterProp="children"
                onFocus={onFocus}
                onSearch={onSearch}
                onChange={(value) => setPeriod(value)}
              >
                <Option value={6}>6</Option>
                <Option value={12}>12</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost Center</text>
              <Input
                style={{ width: 180 }}
                placeholder="Cost Center"
                onChange={(e) => setCost_center(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Currency</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Currency"
                optionFilterProp="children"
                onFocus={onFocus}
                onSearch={onSearch}
                onChange={(value) => setCurrency(value)}
              >
                <Option value="EURO">EURO</Option>
                <Option value="INR">INR</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost/hr</text>
              <Input
                style={{ width: 180 }}
                placeholder="Cost/hr"
                onChange={(e) => setCost_per_hour(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <br></br>
              <CommonButton
                style={{ width: 90 }}
                onClick={() => addConsultantTry()}
                type="primary"
              >
                Save
              </CommonButton>
              <CommonButton style={{ width: 90 }}>Cancel</CommonButton>
            </Flex50>
          </MobileSupplier>
        </RightCardContent>
      </DisplayContractCardComp>
    </CardRight>
  );
};

export default CardRightComp;
