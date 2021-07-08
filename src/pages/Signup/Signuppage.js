import React from "react";
import "../Login/Login.style";
import { Login, LoginContainer, BTNContainer } from "../Login/Login.style";

const Signuppage = () => {
  return (
    <Login>
      <LoginContainer>
        <label>Email</label>
        <input type="text" autoFocus required></input>
        <label>Password</label>
        <input type="password" required></input>
        <BTNContainer>
          <button>Submit</button>
        </BTNContainer>
      </LoginContainer>
    </Login>
  );
};

export default Signuppage;
