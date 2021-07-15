import React, { useContext, useEffect } from "react";
import RefContext from "Utilities/refContext";
import {
  DisplayBody,
  DisplayLeft,
  DisplayRight,
  TitleDiv,
  Wrapper,
} from "../../../components/common.style";
import CircularBar from "../../../components/circularBar";
import { Progress } from "antd";
const ContractDetails = () => {
  const context = useContext(RefContext);
  const {
    store: { contractDetails },
    actions: { getContractDetail },
  } = context;

  useEffect(() => {
    getContractDetail();
  }, []);
  return (
    <Wrapper>
      <TitleDiv>CONTRACT DETAILS</TitleDiv>
      <DisplayBody>
        <DisplayLeft>
          <CircularBar />
        </DisplayLeft>
        <DisplayRight>
          <Progress percent={77} style={{ height: "50px" }} />
        </DisplayRight>
      </DisplayBody>
    </Wrapper>
  );
};
export default ContractDetails;
