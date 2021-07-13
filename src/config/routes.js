import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { Result } from "antd";

const fetchRoutes = (containers) => {
  const { Home, Login, ConsultantList, ContractList, SupplierList, Signup } =
    containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/home" component={withRouter(Home)} />
        <Route
          exact
          path="/consultants"
          component={withRouter(ConsultantList)}
        />
        <Route exact path="/contracts" component={withRouter(ContractList)} />
        <Route exact path="/suppliers" component={withRouter(SupplierList)} />
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/signup" component={withRouter(Signup)} />

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
