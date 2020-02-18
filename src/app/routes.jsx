import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WorkRoutes from "../pages/work/routes";
import Home from "../pages/home/";
import About from "../pages/about/";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <WorkRoutes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
