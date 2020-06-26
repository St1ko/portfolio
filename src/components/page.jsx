import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Document from "components/document";
import Sidebar from "components/sidebar";
import { documents } from "documents";

const PageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 800px;
  margin: 0 auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  box-shadow: -20px 0 20px -20px rgba(51, 51, 51, 0.15);
  border-radius: 0 10px 10px 0;
  padding: 50px 40px;
`;

const Page = ({ match }) => {
  return (
    <PageContainer>
      <Sidebar allDocuments={documents} />
      <Body>
        <Switch>
          <Route
            path="/:docId"
            render={(props) => <Document data={documents} {...props} />}
          />
          <Route
            exact
            path={match.url}
            render={() => <div>Selecteer een document</div>}
          />
        </Switch>
      </Body>
    </PageContainer>
  );
};

export default Page;
