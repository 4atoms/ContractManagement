import styled from "styled-components";
import {
  mdResStyles,
  lgResStyles,
  themeColors,
  primaryColor,
} from "Config/theme";

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
  flex-wrap: wrap;
`;

export const CardLeft = styled.div`
  padding: 20px;

  /* White */
  max-height: 594px;
  height: 500px;
  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardRight = styled.div`
  padding: 0px;
  height: 500px;
  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const CardLeftWrapper = styled.div`
  flex: 62%;
  max-width: 62%;
  padding: 20px 0px 0px 31px;
`;

export const CardRightWrapper = styled.div`
  flex: 36%;
  max-width: 36%;
  padding: 20px 27px 0px 14px;
`;
export const CircularBarsContainer = styled.div`
  display: flex;
  flex: 100%;
  justify-content: space-around;
  max-width: 100%;
  top: 577px;
  flex-wrap: wrap;
  flex-direction: row;
  .ant-progress-circle.ant-progress-status-success .ant-progress-text {
    color: rgba(0, 0, 0, 1);
    font-size: 15px;
  }
`;
export const Circle = styled.div`
  flex: 21%;
  max-width: 21%;
`;
export const CircleText = styled.div`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #3c3c3c;
`;
export const CircleNumber = styled.div`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #3c3c3c;
`;

export const SpaceBar = styled.div`
  flex: 5%;
  max-width: 5%;
`;

export const DisplayCardRight = styled.div`
  display: ${(props) => (props.displayDetails ? "block" : "none")};
`;
export const CreateCardComp = styled.div`
  display: ${(props) => (props.displayCreateSupplier ? "block" : "none")};
`;
export const EditCardComp = styled.div`
  display: ${(props) => (props.displayEditSupplier ? "block" : "none")};
`;
export const DisplayCardRight3 = styled.div`
  display: ${(props) => (props.displayConsultDetails ? "block" : "none")};
`;
export const CreateConsultantCardComp = styled.div`
  display: ${(props) => (props.displayCreateConsultant ? "block" : "none")};
`;
export const EditConsultantCardComp = styled.div`
  display: ${(props) => (props.displayEditConsultant ? "block" : "none")};
`;
export const Consultants = styled.div`
  // padding-top: 40px;
  // padding-bottom: 15px;
  padding-top: 19.89px;
  padding-bottom: 10px;
`;
export const CTitle = styled.div`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #3c3c3c;
`;

export const Tags = styled.div`
  display: flex;
  // padding-top: 15px;
  padding-top: 10px;
  flex-direction: row;
  // gap: 10px;
  gap: 5px;
  & > div {
    border: 1px solid #9e9e9e;

    align-items: center;
    padding: 2px 12px;
    border-radius: 8px;
  }
`;

export const Contracts = styled.div`
  // padding-top: 19.89px;
  // padding-bottom: 15px;
  padding-top: 12.89px;
  padding-bottom: 10px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #3c3c3c;
`;
export const SupplierName = styled.div`
  // padding-top: 30px;
  padding-top: 15px;
  padding-bottom: 3px;
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
    float: right;
  }
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 15px;
`;

export const SupplierId = styled.div`
  // padding-bottom: 12.6px;
  padding-bottom: 10px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9e9e9e;
`;
export const Line1 = styled.div`
  height: 1px;
  border: 1px solid #9e9e9e;
`;

export const PointOfContacts = styled.div`
  & > div {
    ${() =>
      lgResStyles(`
      padding-top: 42px;
      padding-bottom: 15px;
      `)}
    padding-top: 10px;
    padding-bottom: 5px;
    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
  }
  .ant-table table {
    font-size: 12px;
  }
`;

export const RightCardContent = styled.div`
  padding: 5px 31px;
  position: relative;
`;

export const PointOfContactsDiv = styled.div`
  display: flex;
  & > div {
    max-width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 30px;
  }
  & > input {
    width: 135px;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    background: #ffffff;

    border: 1px solid #9e9e9e;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

export const PointOfContactsInput = styled.input`
  max-width: 22%;
  border-radius: 5px;
`;

export const ButtonsDiv = styled.div`
  position: absolute;
  top: 380px;
  right: 80px;
  gap: 20px;
  & > button {
    margin-right: 16px;
  }
`;
export const SaveButton = styled.div`
  width: 75px;
  height: 30px;

  background: #6041b8;
  border-radius: 5px;
  & > button {
    background: none;
    border: none;
  }
  & > button > div {
    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.02em;
    /* White */

    color: #ffffff;
  }
`;
export const CancelButton = styled.div`
  width: 75px;
  height: 30px;

  background: #ffffff;

  border: 1px solid #6041b8;
  box-sizing: border-box;
  border-radius: 5px;
  & > button {
    background: none;
    border: none;
  }
  & > button > div {
    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.02em;

    /* Proton - Primary */

    color: #6041b8;
  }
`;
export const Green = styled.span`
  ${themeColors.greenSuccess}
`;

export const BadgeGreen = styled.div`
  & > span > sup {
    background: rgb(82, 196, 26);
  }
`;
export const BadgeOrange = styled.div`
  & > span > sup {
    background: rgb(255, 122, 0);
  }
`;
export const BadgeBlue = styled.div`
  & > span > sup {
    background: rgb(108, 193, 255);
  }
`;

export const EmailMobileSupplier = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 354px;
  align-items: center;
`;

export const Email = styled.div`
  flex: 33%;
  & > div > text {
    font-size: 12px;
    letter: -2%;
  }
`;

export const Mobile = styled.div`
  flex: 33%;
  & > div > text {
    font-size: 12px;
    letter: -2%;
  }
`;

export const Supplier = styled.div`
  flex: 33%;
  & > div > text {
    font-size: 12px;
    letter: -2%;
  }
`;
export const ConsultantName = styled.div`
  padding-top: 15px;
  padding-bottom: 3px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  /* Proton - Primary */

  color: #6041b8;
`;

export const ActiveUpcomingExpiredContract = styled.div`
  padding-top: 15px;
  padding-bottom: 3px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  /* Proton - Secondary */

  color: #3c3c3c;
`;
export const ActiveContractParts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  align-items: center;
`;

export const ActiveContractSubParts = styled.div`
  flex: 25%;
  & > div > text {
    font-size: 12px;
    letter: -2%;
  }
`;
export const UpcomingContractSubParts = styled.div`
  flex: 25%;
  & > div > text {
    font-size: 12px;
    letter: -2%;
  }
  & > button {
    background: #ffffff;
    /* Proton - Primary */

    border: 1px solid #6041b8;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 12px;
  }
`;
export const UpcomingContractParts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  align-items: center;
`;
export const LightColor = styled.div`
  /* Proton - Tertiary color */
  color: #9e9e9e;
`;

export const NameEmail = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  gap: 25px;
`;
export const MobileSupplier = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  gap: 25px;
`;
export const Flex50 = styled.div`
  flex: 46%;
  font-size: 12px;
  height: 46px;
`;

export const CommonButton = styled.button`
  cursor: pointer;
  color: ${(props) =>
    props.type == "primary"
      ? themeColors.white
      : props.deleteModal
      ? themeColors.redDanger
      : primaryColor};
  background-color: ${(props) =>
    props.type == "primary"
      ? props.deleteModal
        ? themeColors.redDanger
        : primaryColor
      : themeColors.white};
  border: 2px solid
    ${(props) => (props.deleteModal ? themeColors.redDanger : primaryColor)};
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const DeleteBox = styled.div`
  position: relative;
  width: 306px;
  height: 179px;
  z-index: 99;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderDelete = styled.div`
  position: absolute;
  width: 306px;
  height: 42px;
  left: 0px;
  top: 0px;
  z-index: 99;

  background: ${themeColors.redDanger};
  & > div {
    position: absolute;
    width: 145px;
    height: 22px;
    left: 25px;
    top: 10px;

    /* Proton - text body */

    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;

    /* White */

    color: #ffffff;
  }
`;

export const TextDiv = styled.div`
  position: absolute;
  width: 217px;
  height: 17px;
  left: 60px;
  top: 70px;
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #3c3c3c;
  & > div {
    // position: absolute;
    // width: 144px;
    // height: 14px;
    // left: 60px;
    // top: 89px;

    /* Proton - Subtitle */

    font-family: Varela Round;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;

    /* Proton - Tertiary color */

    color: #9e9e9e;
  }
`;
