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
  font-size: 30px;
  padding: 0 40px;
  color: rgba(96, 65, 184, 1);
`;

export const Wrapper = styled.div`
  padding: 0px 90px;
  flex: 100%;
`;
export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  font-size: 40px;
  padding: 0 80px;
  color: rgba(96, 65, 184, 1);
`;

export const DisplayBody = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;
export const DisplayLeft = styled.div`
  flex: 54%;
  height: auto;
`;
export const DisplayRight = styled.div`
  flex: 45%;
  height: auto;
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

export const Break = styled.div`
  flex-basis: 100%;
  flex: 100%;
  height: 10 px;
  background-color: red;
`;

export const WrapperD = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

export const CardWrapper = styled.div`
  padding: 50px 150px;
  & > div {
    flex: 49%;
  }
  & > div > div > div > tr > td {
  }
`;
export const WrapperCard = styled.div`
  gap: 30px;
`;

export const CardLeft = styled.div`
  position: absolute;
  width: 800px;
  height: 744.4px;
  left: 51px;
  top: 120px;

  /* White */

  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardRight = styled.div`
  position: absolute;
  width: 512px;
  height: 744.4px;
  right: 47px;
  top: 120px;

  /* White */

  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
export const Card1Header = styled.div`
  & > button {
    left: 646.33px;
  }
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 15px;
`;
