import React from "react";
import { any, func, string } from "prop-types";
import styled from "styled-components";
import { themeColors, primaryColor } from "Config/theme";

import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

const ContainerWrapper = styled.div`
  margin: auto;
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "200px")};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${themeColors.white};
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  min-height: 30px;
  background-color: ${(props) =>
    props.type == "normal" ? primaryColor : themeColors.redDanger};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${themeColors.white};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 85%;
  padding: 0px 5px 10px;
  position: relative;
  & .ant-table-cell {
    padding: 5px;
  }
  & .ant-spin-nested-loading {
    height: 100%;
  }
  & .ant-spin-container {
    height: 100%;
  }
  & .ant-table-pagination.ant-pagination {
    position: absolute;
    bottom: 0px;
  }
`;

const ModalLayout = ({ children, onclose, title, width, height, type }) => {
  const renderContainer = () => {
    return (
      <div className="fullWidth fullHeight flex">
        <ContainerWrapper width={width} height={height}>
          <Container>
            <Header type={type}>
              <Title>{title}</Title>
              <CloseIcon
                className="cursorPointer"
                style={{ color: themeColors.white }}
                onClick={() => onclose()}
              />
            </Header>
            <ContentWrapper>{children}</ContentWrapper>
          </Container>
        </ContainerWrapper>
      </div>
    );
  };
  return (
    <Modal style={{ zIndex: 1050 }} open={true} onClose={() => onclose()}>
      {renderContainer()}
    </Modal>
  );
};

ModalLayout.defaultProps = {
  title: "",
  type: "normal",
};

ModalLayout.propTypes = {
  children: any,
  onclose: func.isRequries,
  title: string,
  width: string.isRequries,
  height: string.isRequries,
};

export default ModalLayout;
