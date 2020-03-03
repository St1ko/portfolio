import React from "react";
import Router from "./routes";
import { routeDefinitions } from "./routes/definitions";

function App() {
  return <Router routes={routeDefinitions} />;
}

export default App;
