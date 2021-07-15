import React from "react";
import { Progress } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  width: 100%;
`;
const Container = styled.div`
  flex: 28%;
`;
const Space = styled.div`
  flex: 4%;
`;

const CircularBar = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};
export default CircularBar;
