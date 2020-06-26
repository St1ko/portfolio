import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Page from "components/page";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Page} />
    </BrowserRouter>
  );
}

export default App;
