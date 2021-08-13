import React, { useEffect, useState } from "react";
import { Button, Table, Form, Space, Input } from "antd";
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

const CardRightComp = (props) => {
  const [form] = Form.useForm();
  const [label, setLable] = useState([]);
  const [cost, setCost] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [backgroundColors, setBackground] = useState(0);
  const [createform] = Form.useForm();

  const intialValue = {
    name: null,
    organisation_no: null,
    point_of_contacts: [{ name: null, email: null, phone: null }],
  };

  useEffect(() => {
    if (props.detailOfSupplier) {
      form.setFieldsValue(props.detailOfSupplier);
    }
  }, [props.detailOfSupplier]);

  const addSupplierTry = (values) => {
    props.addSupplier(values);
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
  return (
    <CardRight>
      {props.displayDetails && (
        <DisplayCardRight>
          <RightCardContent>
            <SupplierName>
              {props.detailOfSupplier.name}
              <span
                style={{ position: "absolute", right: "20px", top: "20px" }}
              >
                <InsertChartIcon
                  onClick={() => {
                    props.showChart(props.detailOfSupplier.id);
                  }}
                />
                {props.supplierChart && (
                  <ModalLayout
                    width={"654px"}
                    height={"364px"}
                    title={`Cost Estimate ${props.detailOfSupplier.name}`}
                    onclose={onclose}
                  >
                    <Bar data={props.state} options={props.options} />
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
      )}
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
      {props.displayEditSupplier && (
        <EditCardComp>
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
        </EditCardComp>
      )}
    </CardRight>
  );
};

export default CardRightComp;
