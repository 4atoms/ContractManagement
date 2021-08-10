import React from "react";
import { themeColors } from "Config/theme";
import WarningIcon from "@material-ui/icons/Warning";
import { CommonButton } from "Components/common.style";

const contentStyle = {
  display: "flex",
  height: "90%",
  justifyContent: "center",
  gap: "20px",
  fontSize: "18px",
  alignItems: "center",
};

const buttonStyle = {
  position: "absolute",
  bottom: "23px",
  gap: "10px",
  display: "flex",
  right: "20px",
};

const ConfirmDelete = ({ deleteIt, cancelIt }) => {
  return (
    <>
      <div style={contentStyle}>
        <WarningIcon style={{ color: themeColors.redDanger }} />
        <div>
          Are you sure you want to delete?
          <div style={{ fontSize: "14px" }}>{"You can't undo this action"}</div>
        </div>
      </div>
      <div style={buttonStyle}>
        <CommonButton deleteModal onClick={() => cancelIt()}>
          Cancel
        </CommonButton>
        <CommonButton onClick={() => deleteIt()} type="primary" deleteModal>
          Delete
        </CommonButton>
      </div>
    </>
  );
};

export default ConfirmDelete;
