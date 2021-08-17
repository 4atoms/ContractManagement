import React, { useEffect, useState } from "react";
import { Button, Table, Form, Space, Input, Select } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
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
  ButtonsDiv,
  EditCardComp,
  SaveButton,
  CancelButton,
  FlexHalf,
  FormTop,
} from "Components/common.style";
import { themeColors } from "Config/theme";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import { Bar } from "react-chartjs-2";
import ModalLayout from "Components/modalLayout/index";
import ContentLoading from "Components/contentLoading";

const CardRightComp = (props) => {
  const [form] = Form.useForm();
  const [createform] = Form.useForm();

  const intialValue = {
    name: null,
    organisation_no: null,
    point_of_contacts: [{ name: null, email: null, phone: null }],
  };
  let today = new Date();
  const [requestParams, setRequestParams] = useState({
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  });

  useEffect(() => {
    if (props.supplierChart) {
      props.getSupplierAnalysis(props.detailOfSupplier?.id, requestParams);
    }
  }, [requestParams]);

  const months = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "Aug", value: 8 },
    { label: "Sep", value: 9 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
  ];

  const year = [
    { label: today.getFullYear() - 3, value: today.getFullYear() - 3 },
    { label: today.getFullYear() - 2, value: today.getFullYear() - 2 },
    { label: today.getFullYear() - 1, value: today.getFullYear() - 1 },
    { label: today.getFullYear(), value: today.getFullYear() },
  ];

  const formValuesChanged = (allValues) => {
    console.log(allValues);
    setRequestParams(allValues);
  };

  useEffect(() => {
    if (props.detailOfSupplier) {
      form.setFieldsValue(props.detailOfSupplier);
    }
  }, [props.detailOfSupplier]);

  const addSupplierTry = (values) => {
    props.addSupplier(values).then(() => props.showDetails());
  };
  const onclose = () => {
    props.setSupplierChart(false);
  };
  const editSupplierTry = (values) => {
    let request = values;
    request["point_of_contacts"] = request.point_of_contacts.map((poc) => {
      delete poc._id;
      return poc;
    });
    console.log(request, request.id);
    props.editSupplier(request, request.id).then(() => props.showDetails());
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
  const renderCardRight = () => {
    if (props.displayDetails) {
      return (
        <DisplayCardRight>
          <RightCardContent>
            <SupplierName>
              {props.detailOfSupplier.name}
              <span
                style={{ position: "absolute", right: "20px", top: "20px" }}
              >
                <InsertChartIcon
                  onClick={() => {
                    props.showChart(props.detailOfSupplier.id, requestParams);
                  }}
                />
                {props.supplierChart && (
                  <ModalLayout
                    width={"654px"}
                    height={"364px"}
                    title={`Cost Estimate ${props.detailOfSupplier.name}`}
                    onclose={onclose}
                  >
                    <div>
                      <Form
                        layout={"inline"}
                        form={form}
                        onValuesChange={(value, allValues) =>
                          formValuesChanged(allValues)
                        }
                        initialValues={requestParams}
                      >
                        <Form.Item name={["month"]}>
                          <Select
                            style={{ width: 80 }}
                            options={months}
                          ></Select>
                        </Form.Item>
                        <Form.Item name={["year"]}>
                          <Select style={{ width: 80 }} options={year}></Select>
                        </Form.Item>
                      </Form>
                    </div>
                    <div style={{ height: "85%" }}>
                      <Bar data={props.state} options={props.options} />
                    </div>
                  </ModalLayout>
                )}
                <EditIcon
                  className="cursorPointer"
                  style={{ height: "18px" }}
                  onClick={() => {
                    props.showEdit(props.detailOfSupplier.id);
                  }}
                />
                <DeleteForeverIcon
                  className="cursorPointer"
                  style={{ fill: "red", height: "18px" }}
                  onClick={() => {
                    props.setDeleteModalOpen(true);
                    props.setDeleteSupplierDetail(props.detailOfSupplier.id);
                  }}
                />
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
      );
    }
  };
  const renderEditSupplier = () =>{
    if(props.displayEditSupplier){
      return(<EditCardComp>
        <RightCardContent key={props.detailOfSupplier.id}>
          <SupplierName>
            Edit Supplier: {props.detailOfSupplier.name}
          </SupplierName>
          <Line1 />
          <PointOfContactsDiv>
            <Form
              name="dynamic_form_nest_item"
              onFinish={editSupplierTry}
              autoComplete="off"
              layout="vertical"
              form={form}
            >
              <Form.Item name="id" label="id" hidden>
                <Input placeholder="id" />
              </Form.Item>
              <FormTop>
                <FlexHalf>
                  <Form.Item name="name" label="name">
                    <Input placeholder="Name" />
                  </Form.Item>
                </FlexHalf>
                <FlexHalf>
                  <Form.Item name="organization_no" label="organization_no">
                    <Input placeholder="xxyyzz##" />
                  </Form.Item>
                </FlexHalf>
              </FormTop>
              <div style={{ marginTop: "20px" }}>Point Of Contacts</div>

              <div style={{ maxWidth: "90%" }}>
                <Form.List name="point_of_contacts">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Space
                          key={key}
                          style={{ display: "flex", marginBottom: 4 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, "name"]}
                            fieldKey={[fieldKey, "name"]}
                            rules={[
                              { required: true, message: "Missing name" },
                            ]}
                          >
                            <Input placeholder="Name" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "email"]}
                            fieldKey={[fieldKey, "email"]}
                            rules={[
                              { required: true, message: "Missing email" },
                            ]}
                          >
                            <Input placeholder="Email" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "phone"]}
                            fieldKey={[fieldKey, "phone"]}
                            rules={[
                              { required: true, message: "Missing phone" },
                            ]}
                          >
                            <Input placeholder="Phone" />
                          </Form.Item>
                          <DeleteForeverIcon
                            style={{ fill: "red", marginTop: "15px" }}
                            onClick={() => remove(name)}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <div
                          style={{
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                          }}
                        >
                          <Button onClick={() => add()} block>
                            <AddCircleIcon />
                            Click here to add point of contact
                          </Button>
                        </div>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </Form>
            <ButtonsDiv>
              <SaveButton>
                <button htmlType="submit" onClick={() => form.submit()}>
                  <div>Save</div>
                </button>
              </SaveButton>
              <CancelButton>
                <button>
                  <div>Cancel</div>
                </button>
              </CancelButton>
            </ButtonsDiv>
          </PointOfContactsDiv>
        </RightCardContent>
      </EditCardComp>);
    }
    
    return null
  }
  return (
    <CardRight>
      <ContentLoading
        dependencies={[props.detailOfSupplier]}
        dom={renderCardRight}
      />

      {props.displayCreateSupplier && (
        <CreateCardComp>
          <RightCardContent>
            <SupplierName>Create Supplier</SupplierName>
            <Line1 />
            <Form
              form={createform}
              name="create-supplier"
              layout="vertical"
              onFinish={addSupplierTry}
              autoComplete="off"
              initialValues={intialValue}
            >
              <FormTop>
                <FlexHalf>
                  <Form.Item name="name" label="name">
                    <Input placeholder="Name" />
                  </Form.Item>
                </FlexHalf>
                <FlexHalf>
                  <Form.Item name="organization_no" label="organization_no">
                    <Input placeholder="xxyyzz##" />
                  </Form.Item>
                </FlexHalf>
              </FormTop>
              <div style={{ marginTop: "20px" }}>Point Of Contacts</div>
              <div>
                <Form.List name="point_of_contacts">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Space
                          key={key}
                          style={{ display: "flex", marginBottom: 4 }}
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
                          <DeleteForeverIcon
                            style={{ fill: "red" }}
                            onClick={() => remove(name)}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <div>
                          <Button onClick={() => add()} block>
                            <div
                              style={{
                                justifyContent: "center",
                                alignContent: "center",
                                display: "flex",
                              }}
                            >
                              <AddCircleIcon />
                              Click here to add point of contact
                            </div>
                          </Button>
                        </div>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </Form>
            <ButtonsDiv>
              <SaveButton>
                <button htmlType="submit" onClick={() => createform.submit()}>
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
      )}
      <ContentLoading
        dependencies={[props.detailOfSupplier]}
        dom={renderEditSupplier}
      />
    </CardRight>
  );
};

export default CardRightComp;
