import React, { useState, useContext, useEffect } from "react";
import {
  Table,
  Input,
  Badge,
  Dropdown,
  Button,
  Menu,
  Select,
  DatePicker,
  Space,
} from "antd";
import EditIcon from "@material-ui/icons/Edit";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardRight,
  DisplayCardRight3,
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
  SaveButton,
  CancelButton,
} from "Components/common.style";
import { themeColors } from "Config/theme";
import { dateFormatStandard } from "../../utilities/helpers";
import moment from "moment";

const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";

const { Option } = Select;
// const onChange = (value) => {
//   console.log(`selected ${value}`);

// };

const onFocus = () => {
  console.log("focus");
};

const onSearch = (val) => {
  console.log("search:", val);
};

const CardRightComp = (props) => {
  //const context = useContext(RefContext);
  // const {
  //   actions: { addConsultant },
  // } = context;

  //Consultant Create API
  const FormForAdd = {
    name: "",
    email: "",
    phone: "",
    DOB: "",
    location: "",
    supplier: "",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("1992-07-21");
  const [location, setLocation] = useState("Jaipur");
  const [supplier, setSupplier] = useState("");
  // const [companyId, setCompanyId] = useState("");
  // const [pocName, setPocName] = useState("");
  // const [pocEmail, setPocEmail] = useState("");
  // const [pocNum, setPocNum] = useState("");
  const addConsultantTry = () => {
    FormForAdd.name = name;
    FormForAdd.email = email;
    FormForAdd.phone = phone;
    FormForAdd.DOB = DOB;
    FormForAdd.location = location;
    FormForAdd.supplier = supplier;
    // FormForAdd2.supplier = supplier;
    // FormForAdd2.consultant = consultant;
    // FormForAdd2.client = client;
    // FormForAdd2.project.project_name = project_name;
    // FormForAdd2.project.project_number = project_number;
    // FormForAdd2.cost_center = cost_center;
    // FormForAdd2.start_date = start_date;
    // FormForAdd2.period = period;
    // FormForAdd2.role = role;
    // FormForAdd2.currency = currency;
    // FormForAdd2.cost_per_hour = cost_per_hour;
    console.log("Form for Add",FormForAdd);
    // console.log(FormForAdd2);
    props.addConsultant(FormForAdd);
    // props.addConsultant(FormForAdd2);
  };

  //Contract Create API
  const FormForAdd2 = {
    supplier: "",
    consultant: "",
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

  const [consultant, setConsultant] = useState("");
  const [client, setClient] = useState("");
  const [project_name, setProject_name] = useState("");
  const [project_number, setProject_number] = useState("");
  const [cost_center, setCost_center] = useState("");
  const [start_date, setStart_date] = useState("");
  const [period, setPeriod] = useState("");
  const [role, setRole] = useState("");
  const [currency, setCurrency] = useState("");
  const [cost_per_hour, setCost_per_hour] = useState("");

  const [projectList, setProjectList] = useState([]);

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

  // const NoUpcomingContractButton = (props) => {
  //   if (props.detailOfConsultant.contracts?.upcoming?.length == 0) {
  //     console.log("Upcoming");
  //     <button>No upcoming contracts</button>;
  //   }
  // };

  const clientSelection = (value) => {
    setClient(value);
    console.log("ClientID", value);
    console.log("Client Value", client);
  };

  useEffect(() => {
    props.clientsList.forEach((clnt) => {
      console.log(clnt.id == client, client, clnt);
      if (clnt.id == client) {
        setProjectList(clnt.projects);
      }
      console.log("Projectlist", projectList);
    });
  }, [client]);

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
            { dateFormatStandard(expireddata.start_date) } - { dateFormatStandard(expireddata.end_date) }
          </div>
          <div>EUR {expireddata.cost_per_hour}/hr</div>
        </>
      ),
    },
  ];

  return (
    <CardRight>
      <DisplayCardRight3 displayConsultDetails={props.displayConsultDetails}>
        <RightCardContent>
          <ConsultantName>
            {props.detailOfConsultant.name}
            <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
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
                <text></text>
              </div>
            </Supplier>
          </EmailMobileSupplier>
          <Line1 />

          {/* Active Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="success" />
            <text>Active Contract</text>
          </ActiveUpcomingExpiredContract>
          <ActiveContractParts>
            <ActiveContractSubParts>
              <LightColor>
                <text>Client</text>
              </LightColor>
              <div>
                <text>
                  {
                    props.detailOfConsultant.contracts?.active?.[0]?.client
                      ?.name
                  }
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
                <text>{props.detailOfConsultant.location}</text>
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
                <text>Cost/hr</text>
              </LightColor>
              <div>
                <text>
                  {
                    props.detailOfConsultant.contracts?.active?.[0]
                      ?.cost_per_hour
                  }
                </text>
              </div>
            </ActiveContractSubParts>
            <ActiveContractSubParts></ActiveContractSubParts>
          </ActiveContractParts>
          <Line1 />

          {/* Upcoming Contracts */}
          <ActiveUpcomingExpiredContract>
            <Badge status="processing" />
            <text>Upcoming Contract</text>
          </ActiveUpcomingExpiredContract>
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
                <text>{props.detailOfConsultant.location}</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Start Date</text>
              </LightColor>
              <div>
                <text>
                  {dateFormatStandard(
                    props.detailOfConsultant.contracts?.upcoming?.[0]
                      ?.start_date
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
              <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Email</text>
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex50>
          </NameEmail>
          <MobileSupplier>
            <Flex50>
              <text>Mobile</text>
              <input
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
                  return <Option key={element.id} value={element.id}>{element.name}</Option>;
                })}
                {/* <Option value="lucy">Lucy</Option> */}
              </Select>
            </Flex50>
          </MobileSupplier>
          Create Contract(Optional)
          <MobileSupplier>
            <Flex50>
              <text>Client</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Client"
                optionFilterProp="children"
                onChange={(value)=> (clientSelection(value))}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                {props.clientsList.map((element) => {
                  return <Option key={element.id} value={element.id}>{element.name}</Option>;
                })}
              </Select>
            </Flex50>
            <Flex50>
              <text>Project</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Project"
                optionFilterProp="children"
                onFocus={onFocus}
                onSearch={onSearch}
              >
                {projectList.map((element) => {
                  return <Option key={element.id}>{element.project_name}</Option>;
                })}
              </Select>
            </Flex50>
            <Flex50>
              <text>Project ID</text>
              <input
                placeholder="Project ID"
                onChange={(e) => setName(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Role</text>
              <input
                placeholder="Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </Flex50>
            <Flex50>
              <text>Start Date</text>
              <Space direction="vertical" size={18}>
                <DatePicker
                  // defaultValue={moment("01/01/2015", dateFormat)}
                  //onChange={(value) => setStart_date(value)}
                  format={dateFormat}
                  onChange={(e) => setStart_date(e.target.value)}
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
              >
                <Option value="jack">6</Option>
                <Option value="lucy">12</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost Center</text>
              <input
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
              >
                <Option value="EURO">EURO</Option>
                <Option value="INR">INR</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost/hr</text>
              <input
                placeholder="Cost/hr"
                onChange={(e) => setCost_per_hour(e.target.value)}
              />
            </Flex50>
            <Flex50></Flex50>
          </MobileSupplier>
          <ButtonsDiv>
            <SaveButton>
              <button onClick={addConsultantTry}>Save</button>
            </SaveButton>
            <CancelButton>
              <button>Cancel</button>
            </CancelButton>
          </ButtonsDiv>
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
            {/* <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <EditIcon style={{ height: "18px" }} />
              <DeleteForeverIcon style={{ fill: "red", height: "18px" }} />
            </span> */}
          </ConsultantName>
          <Line1 />
          <div>Name</div>
          <input
            placeholder="Name"
            // onChange={(e) => setName(e.target.value)}
            // value={props.detailOfSupplier.name}
          />
          <div>Email</div>
          <input
            placeholder="Email"
            // onChange={(e) => setCompanyId(e.target.value)}
            // value={props.detailOfSupplier.id}
          />
          <div>Mobile</div>
          <input
            placeholder="Mobile"
            // onChange={(e) => setCompanyId(e.target.value)}
            // value={props.detailOfSupplier.id}
          />
          <div>Supplier</div>
          <Select
            showSearch
            style={{ width: 180 }}
            placeholder="Select Supplier"
            optionFilterProp="children"
            onFocus={onFocus}
            onSearch={onSearch}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          {/* <button onClick={updateIterations}>add</button>

          <ButtonsDiv>
            <button onClick={editSupplierTry}>Create</button>
            <button>Cancel</button>
          </ButtonsDiv> */}
        </RightCardContent>
      </EditConsultantCardComp>
    </CardRight>
  );
};

export default CardRightComp;
