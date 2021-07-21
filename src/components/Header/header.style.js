import styled from "styled-components";
import { themeColors } from "Theme";

export const PageHeader = styled.div`
  display: flex;
  vertical-align: bottom;
  justify-content: space-between;
  height: 60px;
  margin: 10px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & > img {
    object-fit: contain;
  }
`;

export const LinkComponent = styled.div`
  display: flex;
  // align-items: flex-end;
  // justify-content: flex-end;
  // vertical-align: bottom;
  flex: 10%;
  padding-top: 14px;
`;

export const Link = styled.div`
  margin: 10px;

  & > a {
    font-weight: 100px;
    font-size: 15px;
    color: ${themeColors.purple};
    &:hover {
      color: ${themeColors.gray70};
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  vertical-align: bottom;
  padding-bottom: 14px;
  color: ${themeColors.purple};
`;

export const Button = styled.div`
  .ant-btn-primary {
    background-color: ${themeColors.purple};
    border-color: ${themeColors.purple};
  }

  .ant-input {
    &:hover {
      border-color: ${themeColors.purple};
    }
  }
`;
