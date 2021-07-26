import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { Result } from "antd";
import AuthRoute from "./authRoute";

const fetchRoutes = (containers) => {
  const {
    Dashboard,
    Login,
    ConsultantList,
    ContractList,
    ConsultantDetail,
    ContractDetail,
    SupplierNew,
  } = containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}

        <AuthRoute exact path="/" component={withRouter(Dashboard)} />
        <AuthRoute exact path="/home" component={withRouter(Dashboard)} />
        <Route exact path="/" component={withRouter(Dashboard)} />
        <Route exact path="/dashboard" component={withRouter(Dashboard)} />
        <Route exact path="/contracts" component={withRouter(ContractList)} />
        <Route
          exact
          path="/contract/:contractId"
          component={withRouter(ContractDetail)}
        />
        <Route exact path="/suppliers" component={withRouter(SupplierNew)} />
        <Route exact path="/login" component={withRouter(Login)} />
        {/* Router No Match - 404 */}
        <Route path="*">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />
        </Route>
      </Switch>
    );
  };
};

export { fetchRoutes };
