import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import DashboardPage from "./dashboard";
import Header from "../../components/Header/index";

const Dashboard = (props) => {
  const propShape = formStoreData(props, ["dashboard", "contract", "analysis"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetDashboardStore();
      propShape.actions.resetContractStore();
      propShape.actions.resetAnalysisStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Header />
          <DashboardPage />
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Dashboard.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Dashboard;
