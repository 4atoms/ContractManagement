import styled from "styled-components";

export const TableWrap = styled.div`
  overflow-x: scroll;
  & > ant-table-pagination {
    color: rgba(96, 65, 184, 1);
    background-color: rgba(96, 65, 184, 1);
    background: rgba(96, 65, 184, 1);
    --antd-wave-shadow-color: rgba(96, 65, 184, 1);
    border-color: rgba(96, 65, 184, 1);
  }
  & > ant-table-pagination::selection {
    color: rgba(96, 65, 184, 1);
    background-color: rgba(96, 65, 184, 1);
    background: rgba(96, 65, 184, 1);
    --antd-wave-shadow-color: rgba(96, 65, 184, 1);
    border-color: rgba(96, 65, 184, 1);
  }
`;

export const TableTitle = styled.div`
  color: rgba(96, 65, 184, 1);
`;

export const Wrapper = styled.div`
  padding: 0px 90px;
`;
