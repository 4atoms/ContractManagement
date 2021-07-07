import React from "react";
import { Input } from 'antd';
import "./index.css";

const Loginpage = () => {
  return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text" autoFocus required></input>
                <label>Password</label>
                <input type="password" required></input>
                <div className="btnContainer">
                    <button>Sign In</button>
                    <p>Don't have an account ? <span>Sign Up</span></p>
                </div>
            </div>
        </section>   
  );
}

export default Loginpage;