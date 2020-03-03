import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RouteWithoutSubRoutes = route => {
  return <Route path={route.path} render={() => <route.component />} />;
};

const RouteWithSubRoutes = route => {
  return (
    <Switch>
      {renderRoutes(route.routes)}
      <RouteWithoutSubRoutes {...route} />
    </Switch>
  );
};

const renderRoutes = routes => {
  return routes.map((route, i) =>
    route.routes ? (
      <RouteWithSubRoutes key={i} {...route} />
    ) : (
      <RouteWithoutSubRoutes key={i} {...route} />
    )
  );
};

const Router = ({ routes }) => {
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  );
};

export default Router;
