import styled from "styled-components";

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

  & > img {
    object-fit: contain;
  }
`;

export const LinkComponent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  vertical-align: bottom;
`;

export const Link = styled.div`
  margin: 10px;
  
  & > a {
    font-weight: 100px;
    font-size: 15px;
    color: #603bbb;
    &:hover {
        color : black;
    }
  }
`;
