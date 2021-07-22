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
  display: flex;
  flex-wrap: nowrap;
`;

export const CardLeft = styled.div`
  padding: 30px;

  /* White */

  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardRight = styled.div`
  /* White */

  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardLeftWrapper = styled.div`
  flex: 40%;
  padding: 0px 15px 0px 51px;
`;

export const CardRightWrapper = styled.div`
  flex: 30%;
  padding: 0px 47px 0px 15px;
`;
export const CircularBarsContainer = styled.div`
  display: flex;
  top: 577px;
  .ant-progress-circle.ant-progress-status-success .ant-progress-text {
    color: rgba(0, 0, 0, 1);
    font-size: 15px;
  }
`;
export const SpaceBar = styled.div`
  width: 18px;
`;

export const DisplayCardRight = styled.div`
  display: ${(props) => (props.displayDetails ? "block" : "none")};
`;

export const Consultants = styled.div`
  & > p > span {
    border: 1px solid #9e9e9e;
    padding: 2px, 12px, 2px, 12px;
  }
`;

export const Contracts = styled.div`
  position: absolute;
  width: 147px;
  height: 26px;
  right: 381px;
  top: 235px;

  /* Proton - text body */

  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  /* Proton - Secondary */

  color: #3c3c3c;
`;
export const SupplierName = styled.div`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  /* Proton - Primary */

  color: #6041b8;
`;
export const Card1Header = styled.div`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24.08px;

  /* Proton - Primary */

  color: #6041b8;

  & > button {
    left: 506.33px;
  }
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 15px;
`;
