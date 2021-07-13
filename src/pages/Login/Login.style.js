import styled from "styled-components";

export const Login = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(22, 24, 47, 1) 0%,
    rgba(38, 20, 72, 0.9) 59%,
    rgba(17, 27, 75, 0.9) 100%
  );
  display: flex;
`;

export const LoginContainer = styled.div`
  padding: 60px;
  margin: auto;
  width: 100%;
  max-width: 450px;
  min-height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);

  & > label {
    color: rgba(38, 20, 72, 0.9) 59%;
    margin: 14px 0;
    display: block;
    font-size: 16px;
    line-height: 1;
  }

  & > input {
    width: 100%;
    border: 1px solid blue;
    border-radius: 5px;
    outline: none;
    font-size: 13px;
    padding: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(38, 20, 72, 0.9) 59%;
    letter-spacing: 1px;
  }
`;

export const ImageWrap = styled.img`
  width: 45%;
  margin-left: 80px;
`;

export const BTNContainer = styled.div`
  width: 100%;
  padding: 24px 0;

  & > button {
    border: none;
    outline: none;
    width: 100%;
    padding: 6px 0;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    background: #603bbb;
    cursor: pointer;
  }

  & > p {
    margin: 14px 0 0 0;
    text-align: right;
    color: black;
  }

  & > p > span {
    color: yellow;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 5px;
    cursor: pointer;
    transition: all 400ms ease-in-out;
  }

  & > p > span:hover {
    color: red;
  }
`;
