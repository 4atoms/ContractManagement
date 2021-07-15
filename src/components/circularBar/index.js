import React from "react";
import { Progress } from "antd";
import styled from "styled-components";

const Wrapperc = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex: 100%;
  height: 150px;
`;
const Container = styled.div`
  flex: 28%;
  height: 150px;
`;
const Space = styled.div`
  flex: 4%;
`;

const CircularBar = () => {
  return (
    <>
      <Wrapperc>
        <Space></Space>
        <Container>
          <Progress type="circle" percent={75} />
        </Container>
        <Space></Space>
        <Container>
          <Progress type="circle" percent={75} />
        </Container>
        <Space></Space>
        <Container>
          <Progress type="circle" percent={75} />
        </Container>
        <Space></Space>
      </Wrapperc>
    </>
  );
};
export default CircularBar;
