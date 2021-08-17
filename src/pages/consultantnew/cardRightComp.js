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
import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddCircleIcon from "@material-ui/icons/AddCircle";
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
  ButtonsDiv,
  EditConsultantCardComp,
  NoContractBox,
} from "Components/common.style";
import {
  dateFormatStandard,
  dateFormatStandard2,
} from "../../utilities/helpers";

import SplitFormLayout from "Components/splitFormLayout";
import ContentLoading from "Components/contentLoading";

import { primaryColor } from "Config/theme";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [supplier, setSupplier] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState(null);
  const [choosen, setChoosen] = useState("end_date");
  // const [companyId, setCompanyId] = useState("");

  const ResetAllStates = () => {
    setName(null);
    setEmail(null);
    setPhone(null);
    setSupplier(null);
    setStart_date(null);
    setEnd_date(null);
    setChoosen("end_date");
    setClient(null);
    setProject(null);
    setCost_center(null);
    setPeriod(null);
    setRole(null);
    setCost_per_hour(null);
    setOrganization_no(null);
  };
  useEffect(() => {
    ResetAllStates();
    console.log("ABC");
  }, [
    props.displayConsultDetails,
    props.displayCreateConsultant,
    props.displayEditConsultant,
    props.displayCreateContract,
  ]);
  const FormForAdd = {
    name: "",
    email: "",
    phone: "",
    supplier: "",
  };

  const addConsultantTry = () => {
    let project_number = project_name?.toUpperCase();
    FormForAdd.name = name;
    FormForAdd.email = email;
    FormForAdd.phone = phone;
    FormForAdd.supplier = supplier;

    FormForAdd2.supplier = supplier || "";
    FormForAdd2["consultant"] = {};
    FormForAdd2["consultant"]["name"] = name || "";
    FormForAdd2["consultant"]["email"] = email || "";
    FormForAdd2["consultant"]["phone"] = phone || "";
    FormForAdd2.client = client || "";
    FormForAdd2.project = project || "";
    FormForAdd2.cost_center = cost_center || "";
    FormForAdd2.start_date = start_date || "";
    FormForAdd2.end_date = dateFormatStandard2(end_date) || "";
    FormForAdd2.period = period || "";
    FormForAdd2.role = role || "";
    FormForAdd2.cost_per_hour = cost_per_hour || "";

    FormForAdd3.supplier = supplier || "";
    FormForAdd3["consultant"] = {};
    FormForAdd3["consultant"]["name"] = name || "";
    FormForAdd3["consultant"]["email"] = email || "";
    FormForAdd3["consultant"]["phone"] = phone || "";
    FormForAdd3.client.name = client_name || "";
    FormForAdd3.client.organization_no = organization_no || "";
    FormForAdd3.project.project_name = project_name || "";
    FormForAdd3.project.project_number = project_number || "";
    FormForAdd3.cost_center = cost_center || "";
    FormForAdd3.start_date = start_date || "";
    FormForAdd3.end_date = dateFormatStandard2(end_date) || "";
    FormForAdd3.period = period || "";
    FormForAdd3.role = role || "";
    FormForAdd3.cost_per_hour = cost_per_hour || "";

    FormForAdd4.supplier = supplier || "";
    FormForAdd4["consultant"] = {};
    FormForAdd4["consultant"]["name"] = name || "";
    FormForAdd4["consultant"]["email"] = email || "";
    FormForAdd4["consultant"]["phone"] = phone || "";
    FormForAdd4.client = client || "";
    FormForAdd4.project.project_name = project_name || "";
    FormForAdd4.project.project_number = project_number || "";
    FormForAdd4.cost_center = cost_center || "";
    FormForAdd4.start_date = start_date || "";
    FormForAdd4.end_date = dateFormatStandard2(end_date) || "";
    FormForAdd4.period = period || "";
    FormForAdd4.role = role || "";
    FormForAdd4.cost_per_hour = cost_per_hour || "";

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
      cost_per_hour,
      "Checking",
      props.contractwithexistingconsultant
    );
    if (props.contractwithexistingconsultant) {
      //Create Contract with existing consultant
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
        ((choosen == "period" && period) ||
          (choosen == "end_date" && end_date)) &&
        role &&
        cost_per_hour
      ) {
        if (choosen == "period") {
          delete FormForAdd4.end_date;
        } else {
          delete FormForAdd4.period;
        }
        console.log("Form For Add4", FormForAdd4);
        props
          .addConsultantwithContract(FormForAdd4)
          .then(() => props.showDetails(null, false));
      } else if (
        client_name &&
        project_name &&
        organization_no &&
        cost_center &&
        start_date &&
        ((choosen == "period" && period) ||
          (choosen == "end_date" && end_date)) &&
        role &&
        cost_per_hour
      ) {
        if (choosen == "period") {
          delete FormForAdd3.end_date;
        } else {
          delete FormForAdd3.period;
        }
        console.log("Form For Add3", FormForAdd3);
        props
          .addConsultantwithContract(FormForAdd3)
          .then(() => props.showDetails(null, false));
      } else if (
        client &&
        project &&
        cost_center &&
        start_date &&
        ((choosen == "period" && period) ||
          (choosen == "end_date" && end_date)) &&
        role &&
        cost_per_hour
      ) {
        if (choosen == "period") {
          delete FormForAdd2.end_date;
        } else {
          delete FormForAdd2.period;
        }
        console.log("Form For Add2", FormForAdd2);
        props
          .addConsultantwithContract(FormForAdd2)
          .then(() => props.showDetails(null, false));
      }
    } else {
      // Contract With Newly Created Consultant
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
        ((choosen == "period" && period) ||
          (choosen == "end_date" && end_date)) &&
        role &&
        cost_per_hour
      ) {
        if (choosen == "period") {
          delete FormForAdd4.end_date;
        } else {
          delete FormForAdd4.period;
        }
        console.log("Form For Add4", FormForAdd4);
        props
          .addConsultantwithContract(FormForAdd4)
          .then(() => props.showDetails(null, false));
      } else if (
        client_name &&
        project_name &&
        organization_no &&
        supplier &&
        name &&
        email &&
        phone &&
        cost_center &&
        ((choosen == "period" && period) ||
          (choosen == "end_date" && end_date)) &&
        role &&
        cost_per_hour
      ) {
        if (choosen == "period") {
          delete FormForAdd3.end_date;
        } else {
          delete FormForAdd3.period;
        }
        console.log("Form For Add3", FormForAdd3);
        props
          .addConsultantwithContract(FormForAdd3)
          .then(() => props.showDetails(null, false));
      } else if (
        supplier &&
        name &&
        email &&
        phone &&
        client &&
        project &&
        cost_center &&
        start_date &&
        ((choosen == "period" && period) ||
          (choosen == "end_date" && end_date)) &&
        role &&
        cost_per_hour
      ) {
        if (choosen == "period") {
          delete FormForAdd2.end_date;
        } else {
          delete FormForAdd2.period;
        }
        console.log("Form For Add2", FormForAdd2);
        props
          .addConsultantwithContract(FormForAdd2)
          .then(() => props.showDetails(null, false));
      } else if (name && email && phone && supplier) {
        console.log("Form for Add", FormForAdd);
        props
          .addConsultant(FormForAdd)
          .then(() => props.showDetails(null, false));
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
    cost_per_hour: "",
  };

  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [cost_center, setCost_center] = useState("");
  const [period, setPeriod] = useState("");
  const [role, setRole] = useState("");
  const [cost_per_hour, setCost_per_hour] = useState("");

  const [projectList, setProjectList] = useState(null);

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
    cost_per_hour: "",
  };

  const editAndUpdateConsultant = (formData) => {
    let request = formData;
    delete request.supplier;
    if (Object.keys(request).length) {
      console.log(request);
      props
        .updateConsultant(request, props.detailOfConsultant.id)
        .then(() => props.showDetails(props.detailOfConsultant.id));
    } else {
      props.showDetails(props.detailOfConsultant.id);
    }
  };

  const NoExpiredContractButton = (props) => {
    if (props.detailOfConsultant.contracts?.expired?.length == 0) {
      console.log("Expired");
      return <NoContractBox>No Expired Contracts</NoContractBox>;
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
        <NoContractBox
          className="cursorPointer"
          style={{ padding: "4px 0px" }}
          onClick={() => {
            props.showCreate();
            console.log("State", props.displayConsultDetails);
            props.setcontractwithexistingconsultant(true);
          }}
        >
          <div
            className="flex"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <AddCircleIcon style={{ color: primaryColor }} />
            Click here to add new contract
          </div>
        </NoContractBox>
      );
    } else {
      return (
        <ActiveContractParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>Client</span>
            </LightColor>
            <div>
              <span>
                {props.detailOfConsultant.contracts?.active?.[0]?.client?.name}
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>Project</span>
            </LightColor>
            <div>
              <span>
                {
                  props.detailOfConsultant.contracts?.active?.[0]?.project
                    ?.project_name
                }
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>Role</span>
            </LightColor>
            <div>
              <span>
                {props.detailOfConsultant.contracts?.active?.[0]?.role}
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>Cost Center</span>
            </LightColor>
            <div>
              <span>
                {props.detailOfConsultant.contracts?.active?.[0]?.cost_center}
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>Start Date</span>
            </LightColor>
            <div>
              <span>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.active?.[0]?.start_date
                )}
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>End Date</span>
            </LightColor>
            <div>
              <span>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.active?.[0]?.end_date
                )}
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            <LightColor>
              <span>Cost/hr</span>
            </LightColor>
            <div>
              <span>
                {props.detailOfConsultant.contracts?.active?.[0]?.cost_per_hour}
              </span>
            </div>
          </ActiveContractSubParts>
          <ActiveContractSubParts>
            {props.detailOfConsultant.contracts?.active?.[0]?.status ==
              "to_be_renewed" && (
              <CommonButton
                type="primary"
                onClick={() => {
                  props.setRenewContractDetail(props.detailOfConsultant);
                  props.setRenewModalOpen(true);
                }}
              >
                Renew
              </CommonButton>
            )}
          </ActiveContractSubParts>
        </ActiveContractParts>
      );
    }
  };

  const NoUpcomingContractButton = (props) => {
    if (props.detailOfConsultant.contracts?.upcoming?.length == 0) {
      console.log("Upcoming");
      return (
        <NoContractBox
          className="cursorPointer"
          style={{ padding: "4px 0px" }}
          onClick={() => {
            props.showCreate();
            console.log("State", props.displayConsultDetails);
            props.setcontractwithexistingconsultant(true);
          }}
        >
          <div
            className="flex"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <AddCircleIcon style={{ color: primaryColor }} />
            No Upcoming Contracts
          </div>
        </NoContractBox>
      );
    } else {
      return (
        <UpcomingContractParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>Client</span>
            </LightColor>
            <div>
              <span>
                {
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.client
                    ?.name
                }
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>Project</span>
            </LightColor>
            <div>
              <span>
                {
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.project
                    ?.project_name
                }
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>Role</span>
            </LightColor>
            <div>
              <span>
                {props.detailOfConsultant.contracts?.upcoming?.[0]?.role}
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>Cost Center</span>
            </LightColor>
            <div>
              <span>
                {props.detailOfConsultant.contracts?.upcoming?.[0]?.cost_center}
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>Start Date</span>
            </LightColor>
            <div>
              <span>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.start_date
                )}
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>End Date</span>
            </LightColor>
            <div>
              <span>
                {dateFormatStandard(
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.end_date
                )}
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <LightColor>
              <span>Cost/hr</span>
            </LightColor>
            <div>
              <span>
                {
                  props.detailOfConsultant.contracts?.upcoming?.[0]
                    ?.cost_per_hour
                }
              </span>
            </div>
          </UpcomingContractSubParts>
          <UpcomingContractSubParts>
            <CommonButton
              onClick={() => {
                props.setContractCancelledModalOpen(true);
                props.setDeleteContractDetail(
                  props.detailOfConsultant.contracts?.upcoming?.[0]?.id
                );
              }}
            >
              Cancel
            </CommonButton>
          </UpcomingContractSubParts>
        </UpcomingContractParts>
      );
    }
  };

  const disabledDate = (current) => {
    let end_date_start = new Date(start_date);
    end_date_start.setDate(end_date_start.getDate() + 30);
    return current < end_date_start;
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
      setProjectList(null);
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
      <Form onFinish={editAndUpdateConsultant} form={form} layout={"vertical"}>
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

  const renderDisplayCard = () => {
    if (props.displayConsultDetails && props.detailOfConsultant) {
      return (
        <DisplayCardRight3>
          <RightCardContent>
            <ConsultantName>
              {props.detailOfConsultant.name}
              <span
                style={{ position: "absolute", right: "20px", top: "20px" }}
              >
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
                    props.setDeleteConsultantDetail(props.detailOfConsultant);
                    props.setDeleteModalOpen(true);
                  }}
                />
              </span>
            </ConsultantName>
            {/* <Consultants></Consultants> */}
            <EmailMobileSupplier>
              <Email>
                <LightColor>
                  <span>Email</span>
                </LightColor>
                <div>
                  <span>{props.detailOfConsultant.email}</span>
                </div>
              </Email>
              <Mobile>
                <LightColor>
                  <span>Mobile</span>
                </LightColor>
                <div>
                  <span>{props.detailOfConsultant.phone}</span>
                </div>
              </Mobile>
              <Supplier>
                <LightColor>
                  <span>Supplier</span>
                </LightColor>
                <div>
                  <span>{props.detailOfConsultant?.supplier?.name}</span>
                </div>
              </Supplier>
            </EmailMobileSupplier>
            <Line1 />

            {/* Active Contracts */}
            <ActiveUpcomingExpiredContract>
              <Badge status="success" />
              <span>Active Contract</span>
              <div>{NoActiveContractButton()}</div>
            </ActiveUpcomingExpiredContract>
            <Line1 />

            {/* Upcoming Contracts */}
            <ActiveUpcomingExpiredContract>
              <Badge status="processing" />
              <span>Upcoming Contract</span>
              <div>{NoUpcomingContractButton(props)}</div>
            </ActiveUpcomingExpiredContract>
            <Line1 />

            {/* Expired Contracts */}
            <ActiveUpcomingExpiredContract>
              <Badge status="error" />
              <span>Expired Contract</span>
              <div>{NoExpiredContractButton(props)}</div>
            </ActiveUpcomingExpiredContract>
          </RightCardContent>
        </DisplayCardRight3>
      );
    } else return null;
  };

  const renderCreateConsultantCard = () => {
    const contractStyle = {
      gap: "35px",
      display: "flex",
      flexFlow: "column",
      marginTop: "10px",
    };
    if (
      props.displayCreateConsultant &&
      props.clientsList &&
      props.suppliersList
    ) {
      return (
        <>
          {props.displayCreateConsultant && (
            <CreateConsultantCardComp
            // displayCreateConsultant={props.displayCreateConsultant}
            >
              <RightCardContent>
                {!props.contractwithexistingconsultant && (
                  <>
                    <SupplierName>Create Consultant</SupplierName>
                    <Line1 />
                    <SplitFormLayout>
                      <>
                        <div>
                          <span>Name</span>
                          <Input
                            style={{ width: "100%" }}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            // value={name}
                          />
                        </div>
                        <div>
                          <span>Mobile</span>
                          <Input
                            style={{ width: "100%" }}
                            placeholder="Mobile"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </>
                      <>
                        <div>
                          <div>Email</div>
                          <Input
                            style={{ width: "100%" }}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div>
                          <div>Supplier</div>
                          <Select
                            showSearch
                            style={{ width: "100%" }}
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
                        </div>
                      </>
                    </SplitFormLayout>
                    <div style={{ margin: "10px 0 5px 0" }}>
                      Create Contract(Optional)
                    </div>
                  </>
                )}
                {props.contractwithexistingconsultant && (
                  <>
                    <ConsultantName>
                      <span>
                        Create Contract for {props.detailOfConsultant?.name}
                      </span>
                    </ConsultantName>
                    <Line1></Line1>
                  </>
                )}
                <SplitFormLayout>
                  <div
                    style={
                      props.contractwithexistingconsultant
                        ? contractStyle
                        : null
                    }
                  >
                    <div>
                      <div>Client</div>
                      <AutoComplete
                        style={{
                          width: "100%",
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
                    </div>
                    <div>
                      <span>Organization ID</span>
                      <Input
                        style={{ width: "100%" }}
                        placeholder="Organization ID"
                        onChange={(e) => setOrganization_no(e.target.value)}
                        disabled={client_name == null}
                        value={organization_no}
                      />
                    </div>
                    <div>
                      <div>Start Date</div>
                      <DatePicker
                        style={{ width: "100%" }}
                        allowClear={false}
                        format={dateFormat}
                        onChange={(e) => {
                          setStart_date(dateFormatStandard2(e));
                          let end_date_start = new Date(e);
                          end_date_start.setDate(end_date_start.getDate() + 30);
                          setEnd_date(end_date_start);
                        }}
                      />
                    </div>
                    <div>
                      <div>Cost Center</div>
                      <Input
                        style={{ width: "100%" }}
                        placeholder="Cost Center"
                        onChange={(e) => setCost_center(e.target.value)}
                      />
                    </div>
                    <div>
                      <div>Cost/hr</div>
                      <Input
                        style={{ width: "100%" }}
                        placeholder="Cost/hr"
                        onChange={(e) => setCost_per_hour(e.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    style={
                      props.contractwithexistingconsultant
                        ? contractStyle
                        : null
                    }
                  >
                    <div>
                      <div>Project</div>
                      <AutoComplete
                        style={{
                          width: "100%",
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
                        {(projectList || []).map((element) => {
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
                    </div>
                    <div>
                      <div>Role</div>
                      <Input
                        style={{ width: "100%" }}
                        placeholder="Role"
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                    <div>
                      <div>Period</div>
                      <Select
                        showSearch
                        style={{
                          width: "100%",
                          opacity: choosen == "period" ? 1 : 0.4,
                        }}
                        disabled={start_date == null || start_date == ""}
                        placeholder="Select Period"
                        optionFilterProp="children"
                        onClick={() => setChoosen("period")}
                        onFocus={onFocus}
                        onSearch={onSearch}
                        onChange={(value) => setPeriod(value)}
                      >
                        <Option value={12}>12</Option>
                        <Option value={6}>6</Option>
                        <Option value={5}>5</Option>
                        <Option value={4}>4</Option>
                        <Option value={3}>3</Option>
                        <Option value={2}>2</Option>
                        <Option value={1}>1</Option>
                      </Select>
                    </div>
                    <div>
                      <div>End Date</div>
                      <DatePicker
                        style={{
                          width: "100%",
                          opacity: choosen == "end_date" ? 1 : 0.4,
                        }}
                        disabledDate={disabledDate}
                        disabled={start_date == null || start_date == ""}
                        value={end_date ? moment(end_date, dateFormat) : null}
                        allowClear={false}
                        onClick={() => setChoosen("end_date")}
                        format={dateFormat}
                        onChange={(e) => setEnd_date(e)}
                      />
                    </div>
                    <div>
                      <br></br>
                      <CommonButton
                        style={{ width: 90 }}
                        onClick={() => addConsultantTry()}
                        type="primary"
                      >
                        Save
                      </CommonButton>
                      <CommonButton
                        style={{ width: 90 }}
                        onClick={() => props.showDetails()}
                      >
                        Cancel
                      </CommonButton>
                    </div>
                  </div>
                </SplitFormLayout>
              </RightCardContent>
            </CreateConsultantCardComp>
          )}
        </>
      );
    } else return null;
  };

  const renderEditConsultantCard = () => {
    if (props.displayEditConsultant && props.detailOfConsultant) {
      return (
        <>
          <EditConsultantCardComp
          // displayEditConsultant={props.displayEditConsultant}
          // detailOfConsultant={props.detailOfConsultant}
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
                <CommonButton
                  onClick={() => props.showDetails(props.detailOfConsultant.id)}
                >
                  Cancel
                </CommonButton>
              </ButtonsDiv>
            </RightCardContent>
          </EditConsultantCardComp>
        </>
      );
    } else return null;
  };

  const contentLoading = () => {
    {
      /* Display Consultant */
    }
    if (props.displayConsultDetails) {
      return (
        <ContentLoading
          dependencies={[props.detailOfConsultant]}
          dom={renderDisplayCard}
        />
      );
    } else if (props.displayCreateConsultant) {
      return (
        <ContentLoading
          dependencies={[props.clientsList, props.suppliersList]}
          dom={renderCreateConsultantCard}
        />
      );
    } else if (props.displayEditConsultant) {
      return (
        <ContentLoading
          dependencies={[props.detailOfConsultant]}
          dom={renderEditConsultantCard}
        />
      );
    } else return null;
  };

  return <CardRight>{contentLoading()}</CardRight>;
};

export default CardRightComp;
