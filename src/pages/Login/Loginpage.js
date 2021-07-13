import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RefContext from "Utilities/refContext";
import "./Login.style.js";
import { Login, LoginContainer, BTNContainer, ImageWrap } from "./Login.style";
import logo from "Assets/images/proton-logo.png";
import LinkButton from "../../components/Linkbutton";

const Loginpage = () => {
  const Context = useContext(RefContext);
  const {
    store: { username, password },
    actions: { assignToLoginStore, login },
  } = Context;

  const loginUser = () => {
    const request = { username, password };
    login(request);
  };

  return (
    <Login>
      <LoginContainer>
        <ImageWrap src={logo} />
        <label>Email</label>
        <input
          type="text"
          value={username}
          autoFocus
          required
          onChange={(e) => assignToLoginStore("username", e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => assignToLoginStore("password", e.target.value)}
        ></input>
        <BTNContainer>
          <LinkButton to="/home" onClick={loginUser}>
            Log In
          </LinkButton>
          <p>
            Dont have an account ?
            <a href="Signup">
              <span>Sign Up</span>
            </a>
          </p>
        </BTNContainer>
      </LoginContainer>
    </Login>
  );
};

export default Loginpage;
