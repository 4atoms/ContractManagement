import styled from "styled-components";
import { mdResStyles } from "Config/theme";

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
  ${() =>
    mdResStyles(`
  height: 100px;`)}
`;
export const DisplayLeft = styled.div`
  flex: 65%;
  height: auto;
  max-width: 65%;
`;
export const DisplayRight = styled.div`
  flex: 35%;
  max-width: 35%;
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
  background-color: #fafaff;
  display: flex;
  flex-wrap: nowrap;
`;

export const CardLeft = styled.div`
  height: 600px;
  padding: 30px;
  //max-width: 100%;

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
  flex: 58%;
  flex-wrap: wrap;
  //max-width: 40%;
  padding: 40px 8px 0px 31px;
`;

export const CardRightWrapper = styled.div`
  flex: 30%;
  //max-width: 40%;
  padding: 40px 47px 0px 8px;
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
  padding-top: 40px;
  padding-bottom: 15px;
`;
export const CTitle = styled.div`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  /* Proton - Secondary */

  color: #3c3c3c;
`;

export const Tags = styled.div`
  display: flex;
  padding-top: 15px;
  flex-direction: row;
  gap: 10px;
  & > div {
    border: 1px solid #9e9e9e;

    align-items: center;
    padding: 2px 12px;
    border-radius: 8px;
  }
`;

export const Contracts = styled.div`
  padding-top: 19.89px;
  padding-bottom: 15px;
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
  padding-top: 30px;
  padding-bottom: 5px;
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
    left: 406.33px;
  }
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 15px;
`;

export const SupplierId = styled.div`
  padding-bottom: 12.6px;
  /* Proton - Table content text */

  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Proton - Tertiary color */
  color: #9e9e9e;
`;
export const Line1 = styled.div`
  height: 1px;
  border: 1px solid #9e9e9e;
`;

export const PointOfContacts = styled.div`
  padding-top: 42px;
  padding-bottom: 15px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
`;

export const RightCardContent = styled.div`
  padding: 5px 31px;
  position: relative;
`;
