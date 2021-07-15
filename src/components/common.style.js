import styled from "styled-components";

export const TableWrap = styled.div`
  overflow-x: scroll;
  .ant-pagination-item-active a {
    color: rgba(96, 65, 184, 1);
  }
  .ant-pagination-item-active {
    border-color: rgba(96, 65, 184, 1);
  }
`;

export const TableTitle = styled.div`
  color: rgba(96, 65, 184, 1);
`;

export const Wrapper = styled.div`
  padding: 0px 90px;
`;
export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;

export const DisplayBody = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgba(235, 241, 245, 0);
`;
export const DisplayLeft = styled.div`
  display: flex;
  flex: 55%;
  height: 500px;
  background-color: rgba(235, 241, 245, 1);
`;
export const DisplayRight = styled.div`
  display: flex;
  flex: 45%;
  height: 500px;
  background-color: rgba(235, 241, 245, 1);
    &> div{
      padding: 80px 80px;
      width:100%;
    }
    & > div > div > div {
      height: 30px;
    }
    .ant-progress-success-bg,
    .ant-progress-bg {
      
      height: 30px !important;
    }
  }
  `;
