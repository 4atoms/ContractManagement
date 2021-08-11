import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Reduxifier from "Utilities/reduxifier";
import Registry from "Utilities/registry";
import { fetchRoutes } from "Config/routes";

import { URL_LOGIN } from "Config/url";

const Containers = Reduxifier.bindReactRedux(Registry);
const Routes = fetchRoutes(Containers);

const Application = () => {
  const renderContent = (data) => {
    const components = [];
    if (data.location.pathname == URL_LOGIN) {
      components.push(<Routes />);
    } else {
      components.push(
        <>
          <Containers.Header {...data} />
          <Routes />
        </>
      );
    }

    return components;
  };

  return (
    <Router history={Reduxifier.history}>
      <div className="fullHeight">
        <Route render={(data) => renderContent(data)} />
      </div>
    </Router>
  );
};

export default Application;
