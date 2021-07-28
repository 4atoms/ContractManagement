import React from "react";
import { Table, Input, Badge, Dropdown, Button, Menu, Select } from "antd";
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
} from "Components/common.style";
import { themeColors } from "Config/theme";
import { dateFormatStandard } from "../../utilities/helpers";

const { Option } = Select;
const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onFocus = () => {
  console.log("focus");
};

const onSearch = (val) => {
  console.log("search:", val);
};

// const NoExpiredContractButton = (props) => {
//   if (props.detailOfConsultant.contracts?.expired?.length == 0) {
//     console.log("Expired");
//     <button>No expired contracts </button>;
//   }
// }; 
// const NoUpcomingContractButton = (props) => {
//   if (props.detailOfConsultant.contracts?.upcoming?.length == 0) {
//     console.log("Upcoming");
//     <button>No upcoming contracts</button>;
//   }
// };

const CardRightComp = (props) => {
  const columns2 = [
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Organization No",
      dataIndex: "organization_no",
      key: "organization_no",
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
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Project</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Role</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Cost Center</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Start Date</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>End Date</text>
              </LightColor>
              <div>
                <text>A</text>
              </div>
            </UpcomingContractSubParts>
            <UpcomingContractSubParts>
              <LightColor>
                <text>Cost/hr</text>
              </LightColor>
              <div>
                <text>A</text>
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

            <Table
              dataSource={props.detailOfConsultant.contracts?.expired}
              pagination={{ position: ["none", "none"] }}
              showHeader={false}
              columns={columns2}
            ></Table>
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
              <Input placeholder="Name" />
            </Flex50>
            <Flex50>
              <text>Email</text>
              <Input placeholder="Email" />
            </Flex50>
          </NameEmail>
          <MobileSupplier>
            <Flex50>
              <text>Mobile</text>
              <Input placeholder="Mobile" />
            </Flex50>
            <Flex50>
              <text>Supplier</text>
              <br></br>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                <Option>{props.detailOfConsultant.contracts?.expired}</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
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
                onChange={onChange}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Project</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Project"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Project ID</text>
              <Input placeholder="Project ID" />
            </Flex50>
            <Flex50>
              <text>Role</text>
              <Input placeholder="Role" />
            </Flex50>
            <Flex50>
              <text>Start Date</text>
              <Input placeholder="Mobile" />
            </Flex50>
            <Flex50>
              <text>Period</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Period"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost Center</text>
              <Input placeholder="Cost Center" />
            </Flex50>
            <Flex50>
              <text>Currency</text>
              <Select
                showSearch
                style={{ width: 180 }}
                placeholder="Select Currency"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onSearch={onSearch}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Flex50>
            <Flex50>
              <text>Cost/hr</text>
              <Input placeholder="Mobile" />
            </Flex50>
            <Flex50></Flex50>
          </MobileSupplier>
          {/* <ButtonsDiv>
            <button>Save</button>
            <button>Cancel</button>
          </ButtonsDiv> */}
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
            onChange={onChange}
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
