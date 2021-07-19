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
    SupplierList,
    ConsultantDetail,
    ContractDetail,
    SupplierDetail,
  } = containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}

        <AuthRoute exact path="/" component={withRouter(Dashboard)} />
        <AuthRoute exact path="/home" component={withRouter(Dashboard)} />
        <Route
          exact
          path="/consultants"
          component={withRouter(ConsultantList)}
        />
        <Route exact path="/" component={withRouter(Dashboard)} />
        <Route exact path="/dashboard" component={withRouter(Dashboard)} />
        <Route
          exact
          path="/consultant/*"
          component={withRouter(ConsultantDetail)}
        />
        <Route exact path="/contracts" component={withRouter(ContractList)} />
        <Route
          exact
          path="/contract/*"
          component={withRouter(ContractDetail)}
        />
        <Route
          exact
          path="/supplier/*"
          component={withRouter(SupplierDetail)}
        />
        <Route exact path="/suppliers" component={withRouter(SupplierList)} />
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
