import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import DashboardPage from "./dashboard";

const Dashboard = (props) => {
  const propShape = formStoreData(props, ["dashboard"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetDashboardStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
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
