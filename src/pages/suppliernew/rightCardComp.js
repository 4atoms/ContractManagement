import React from "react";
import { CardRight } from "Components/common.style";
import DisplayCard from "./displayCard";
import CreateCard from "./createCard";
import EditCard from "./editCard";
const RightCardComp = (props) => {
  return (
    <CardRight>
      <DisplayCard
        displayDetails={props.displayDetails}
        displayEditSupplier={props.displayEditSupplier}
      />
      <CreateCard displayCreateSupplier={props.displayCreateSupplier} />

      <EditCard
        displayEditSupplier={props.displayEditSupplier}
        detailOfSupplier={props.detailOfSupplier}
      />
    </CardRight>
  );
};

export default RightCardComp;
