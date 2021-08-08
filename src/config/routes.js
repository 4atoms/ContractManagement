import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { Result } from "antd";
import AuthRoute from "./authRoute";

const fetchRoutes = (containers) => {
  const { Dashboard, Login, SupplierNew, ConsultantNew } = containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}

        <AuthRoute exact path="/" component={withRouter(Dashboard)} />
        <AuthRoute exact path="/home" component={withRouter(Dashboard)} />
        <AuthRoute exact path="/dashboard" component={withRouter(Dashboard)} />
        <AuthRoute exact path="/suppliers" component={withRouter(SupplierNew)} />
        <AuthRoute
          exact
          path="/consultants"
          component={withRouter(ConsultantNew)}
        />

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
