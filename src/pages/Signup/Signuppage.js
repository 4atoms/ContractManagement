import React from "react";
import "../Login/Login.style";
import { Login, LoginContainer, BTNContainer, ImageWrap } from "../Login/Login.style";
import logo from "Assets/images/proton-logo.png";

const Signuppage = () => {
  return (
        <Login>
            <LoginContainer>
                <ImageWrap src={logo}/>
                <label>Username</label>
                <input type="text" autoFocus required></input>
                <label>Email</label>
                <input type="text" autoFocus required></input>
                <label>Password</label>
                <input type="password" required></input>
                <label>Confirm Password</label>
                <input type="password" required></input>
                <BTNContainer>
                    <button>Submit</button>
                </BTNContainer>
            </LoginContainer>
        </Login>   
  );
}

export default Signuppage;