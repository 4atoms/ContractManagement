import styled from "styled-components";
import { primaryColor, tertiaryColor, themeColors } from "Theme";

const WrapperCard = styled.div`
  background-color: #fafaff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px;
}
`;

const Card = styled.div`
  padding: 15px;
  width: 100%

  /* White */
  background: #ffffff;
  box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const CardTitle = styled.div`
  color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin: 10px;
`;

const OverviewCard = styled(Card)`
  height: 240px;
`;

const TimeSheetCard = styled(Card)`
  height: 340px;
  & .ant-table-cell {
    padding: 7px;
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
    margin: 5px 0;
  }
`;

const RenewableCard = styled(Card)`
  height: 290px;
  & .ant-table-cell {
    padding: 4px;
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
    margin: 5px 0;
  }
`;

const ChartCard = styled(Card)`
  height: 290px;
`;

const CollectionName = styled.div`
  color: ${tertiaryColor};
`;

const Button = styled.button`
  cursor: pointer;
  color: ${(props) =>
    props.type == "primary" ? themeColors.white : primaryColor};
  background-color: ${(props) =>
    props.type == "primary" ? primaryColor : themeColors.white};
  border: 2px solid ${primaryColor};
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export {
  WrapperCard,
  Card,
  CardTitle,
  OverviewCard,
  TimeSheetCard,
  RenewableCard,
  ChartCard,
  CollectionName,
  Button,
};
