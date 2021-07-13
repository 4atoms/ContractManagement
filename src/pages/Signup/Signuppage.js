import React, { useContext, useState, useEffect } from "react";
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
  const [disabled, setDisabled] = useState(true);
  const Context = useContext(RefContext);
  const {
    store: { name, username, password, confirmpassword },
    actions: { assignToSignupStore, signup },
  } = Context;

  const signupUser = () => {
    const request = { name, username, password, confirmpassword };
    signup(request);
  };

  useEffect(() => {
    console.log(password, confirmpassword);
    if (password == confirmpassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmpassword]);

  return (
    <Login>
      <LoginContainer>
        <ImageWrap src={logo} />
        <label>Username</label>
        <input
          type="text"
          value={name}
          autoFocus
          required
          onChange={(e) => assignToSignupStore("name", e.target.value)}
        ></input>
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
          value={confirmpassword}
          id="rpassword"
          required
          onChange={(e) =>
            assignToSignupStore("confirmpassword", e.target.value)
          }
        ></input>
        <BTNContainer>
          <button id="submit" disabled={disabled} onClick={signupUser}>
            Submit
          </button>
        </BTNContainer>
      </LoginContainer>
    </Login>
  );
};

export default Signuppage;
