import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes";
import { routeDefinitions } from "./routes/definitions";

import Header from "components/header";
import Loader from "components/loader";

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 4px;
  height: 700px;
  border: 2px solid #45445e;
`;

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Header pages={routeDefinitions} />
        <Router routes={routeDefinitions} />
        <Loader />
      </Page>
    </BrowserRouter>
  );
}

export default App;
