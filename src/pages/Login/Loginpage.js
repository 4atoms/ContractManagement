import React, { useContext } from "react";
import RefContext from "Utilities/refContext";
import "./Login.style.js";
import { Login, LoginContainer, BTNContainer, ImageWrap } from "./Login.style";
import logo from "Assets/images/Group35.png";
import { Form, Input } from "antd";

const Loginpage = () => {
  const Context = useContext(RefContext);
  const {
    actions: { login },
    history,
  } = Context;

  const [form] = Form.useForm();

  const loginUser = (formData) => {
    const request = { email: formData.email, password: formData.password };
    login(request, history);
  };

  return (
    <Login>
      <LoginContainer>
        <div style={{ margin: "10px" }}>
          <ImageWrap src={logo} />
        </div>
        <Form layout="vertical" form={form} onFinish={loginUser}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input allowClear placeholder="Email Id" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter password",
              },
            ]}
          >
            <Input.Password allowClear placeholder="Password" />
          </Form.Item>
        </Form>
        <BTNContainer>
          <button onClick={() => form.submit()}>Log In</button>
          {/* <p>
            Dont have an account ?
            <a href="Signup">
              <span>Sign Up</span>
            </a>
          </p> */}
        </BTNContainer>
      </LoginContainer>
    </Login>
  );
};

export default Loginpage;
