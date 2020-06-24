import React from "react";
import { Switch, Route } from "react-router-dom";
import Body from "components/body";

const Router = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} component={Body} />
      ))}
    </Switch>
  );
};

export default Router;
