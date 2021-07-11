import React, { useContext, useState } from "react";
import RefContext from "Utilities/refContext";
import "../Login/Login.style";
import {
  Login,
  LoginContainer,
  BTNContainer,
  ImageWrap,
} from "../Login/Login.style";
import logo from "Assets/images/proton-logo.png";

const Signuppage = () => {
  const [disabled, setDisabled] = useState("false");
  const Context = useContext(RefContext);
  const {
    store: { username, password, rpassword },
    actions: { assignToSignupStore, signup },
  } = Context;

  return (
    <Login>
      <LoginContainer>
        <ImageWrap src={logo} />
        <label>Username</label>
        <input type="text" autoFocus required></input>
        <label>Email</label>
        <input
          type="text"
          value={username}
          autoFocus
          required
          onChange={(e) => assignToSignupStore("username", e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          id="password"
          required
          onChange={(e) => assignToSignupStore("password", e.target.value)}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          value={rpassword}
          id="rpassword"
          required
          onChange={(e) => assignToSignupStore("rpassword", e.target.value)}
        ></input>
        <BTNContainer>
          <button id="submit" disabled={disabled} onClick={signup}>
            Submit
          </button>
        </BTNContainer>
      </LoginContainer>
    </Login>
  );
};

export default Signuppage;
