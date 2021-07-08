import React from "react";
import "./Login.style.js";
import { Login, LoginContainer, BTNContainer } from "./Login.style";

const Loginpage = () => {
  return (
    <Login>
      <LoginContainer>
        <label>Email</label>
        <input type="text" autoFocus required></input>
        <label>Password</label>
        <input type="password" required></input>
        <BTNContainer>
          <button>Sign In</button>
          <p>
            Don&apost have an account ? <span>Sign Up</span>
          </p>
        </BTNContainer>
      </LoginContainer>
    </Login>
  );
};

export default Loginpage;
