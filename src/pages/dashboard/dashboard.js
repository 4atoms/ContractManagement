import React, { useContext } from "react";
import RefContext from "Utilities/refContext";
import { WrapperCard } from "./dashboard.style";

import OverView from "./overView";
import TimeSheet from "./timeSheet";
import RenewContract from "./renewContract";
import CostEstimation from "./costEstimationAnalysis";

const DashboardPage = () => {
  const context = useContext(RefContext);
  const { store, actions } = context;

  return (
    <WrapperCard style={{ gap: "20px" }}>
      <div
        className="flex"
        style={{ width: "43.3%", flexFlow: "column", gap: "15px" }}
      >
        <OverView store={store} actions={actions} />
        <TimeSheet store={store} actions={actions} />
      </div>
      <div
        className="flex"
        style={{ width: "55%", flexFlow: "column", gap: "15px" }}
      >
        <RenewContract store={store} actions={actions}></RenewContract>
        <CostEstimation store={store} actions={actions}></CostEstimation>
      </div>
    </WrapperCard>
  );
};
export default DashboardPage;
