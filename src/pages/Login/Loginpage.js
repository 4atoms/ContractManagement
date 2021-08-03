import React, { useContext } from "react";
import RefContext from "Utilities/refContext";
import "./Login.style.js";
import { Login, LoginContainer, BTNContainer, ImageWrap } from "./Login.style";
import logo from "Assets/images/Group35.png";

const Loginpage = () => {
  const Context = useContext(RefContext);
  const {
    store: { email, password },
    actions: { assignToAuthStore, login },
    history,
  } = Context;

  const loginUser = () => {
    const request = { email, password };
    login(request, history);
  };

  return (
    <Login>
      <LoginContainer>
        <ImageWrap src={logo} />
        <label>Email</label>
        <input
          type="text"
          value={email}
          autoFocus
          required
          onChange={(e) => assignToAuthStore("email", e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => assignToAuthStore("password", e.target.value)}
        ></input>
        <BTNContainer>
          <button onClick={loginUser}>Log In</button>
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
