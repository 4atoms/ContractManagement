import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Button, Input, Form } from "antd";
import RefContext from "Utilities/refContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardLeft,
  CardRight,
  WrapperCard,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
} from "Components/common.style";
import ConfirmDelete from "Components/confirmDelete";
import { themeColors } from "Config/theme";


const DashboardPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  
  const context = useContext(RefContext);
  const {
    store: {},
    actions: {},
  } = context;

  return (
    <>
      <WrapperCard>
        <CardLeftWrapper>
          <CardLeft style={{ maxHeight: "241", maxWidth: "511" }}></CardLeft>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
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
        </CardLeftWrapper>
        <CardRightWrapper>
          <CardRight></CardRight>
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default DashboardPage;
