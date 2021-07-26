import React, { useContext, useEffect, useState } from "react";
import { Table, Space, Badge, Button, Input } from "antd";
import RefContext from "Utilities/refContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardLeft,
  CardRight,
  WrapperCard,
  Card1Header,
  CardLeftWrapper,
  CardRightWrapper,
} from "Components/common.style";
import { themeColors } from "Config/theme";
const DashboardPage = () => {
  const context = useContext(RefContext);
  const {
    store: {},
    actions: {},
  } = context;
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayCreateSupplier, setDisplayCreateSupplier] = useState(false);

  return (
    <>
      <WrapperCard>
        <CardLeftWrapper>
          <CardLeft style={{ maxHeight: "241", maxWidth: "511" }}></CardLeft>
        </CardLeftWrapper>
        <CardRightWrapper>
          <CardRight></CardRight>
        </CardRightWrapper>
      </WrapperCard>
    </>
  );
};
export default DashboardPage;
