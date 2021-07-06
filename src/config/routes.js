import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { Result } from "antd";

const fetchRoutes = (containers) => {
  const { Home, Consultant } = containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/home" component={withRouter(Home)} />
        <Route exact path="/consultant" component={withRouter(Consultant)} />

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
