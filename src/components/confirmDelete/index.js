import React from "react";
import styled from "styled-components";
import { themeColors } from "Config/theme";

const DeleteBox = styled.div`
  position: relative;
  width: 306px;
  height: 179px;
  z-index: 99;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderDelete = styled.div`
  position: absolute;
  width: 306px;
  height: 42px;
  left: 0px;
  top: 0px;
  z-index: 99;

  background: ${themeColors.redDanger};
  & > div {
    position: absolute;
    width: 145px;
    height: 22px;
    left: 25px;
    top: 10px;

    /* Proton - text body */

    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;

    /* White */

    color: #ffffff;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  width: 217px;
  height: 17px;
  left: 60px;
  top: 70px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #3c3c3c;
  & > div {
    // position: absolute;
    // width: 144px;
    // height: 14px;
    // left: 60px;
    // top: 89px;

    /* Proton - Subtitle */

    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;

    /* Proton - Tertiary color */

    color: #9e9e9e;
  }
`;
const CancelButton = styled.div`
  //   position: absolute;
  width: 75px;
  //   height: 30px;
  //   left: 0px;
  //   top: 0px;
  z-index: 99;

  background: #ffffff;
  /* Proton - Danger */

  border: 1px solid rgba(219, 48, 63, 0.8);
  box-sizing: border-box;
  border-radius: 5px;
  & > button {
    // position: absolute;
    width: 57.95px;
    height: 16.5px;
    // left: 9px;
    // top: 8px;
    background: none;
    border: none;

    /* Proton - Subtitle */

    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.02em;

    /* Proton - Danger */

    color: rgba(219, 48, 63, 0.8);
  }
`;
const DeleteButton = styled.div`
  //   position: absolute;
  width: 75px;
  //   height: 30px;
  //   left: 82px;
  //   top: 0px;
  z-index: 99;

  /* Proton - Danger */

  background: rgba(219, 48, 63, 0.8);
  border-radius: 5px;
  & > button {
    // position: absolute;
    width: 57.95px;
    // height: 16.5px;
    // left: 91px;
    // top: 8px;
    background: none;
    border: none;

    /* Proton - Subtitle */

    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.02em;

    /* White */

    color: #ffffff;
  }
`;
const ConfirmDelete = (props) => {
  return (
    <>
      <DeleteBox>
        <HeaderDelete>
          <div>Confirm Deletion</div>
        </HeaderDelete>
        <TextDiv>
          Are you sure you want to delete?
          <div>You cant undo this action</div>
          <CancelButton>
            <button>Cancel</button>
          </CancelButton>
          <DeleteButton>
            <button onClick={props}>Delete</button>
          </DeleteButton>
        </TextDiv>
      </DeleteBox>
    </>
  );
};

export default ConfirmDelete;
