import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import Document from "components/document";
import { docs } from "documents";

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
  border: 2px solid #45445e;
  border-top: none;
`;

const DocumentList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0;
  padding: 20px;
  border-right: 2px solid #45445e;
  list-style-type: none;

  li {
    padding: 10px 0px;
    align-items: center;
  }

  li:before {
    content: "▲";
  }

  a {
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;
    font-weight: 600;
    text-decoration: none;
  }

  a:active {
    background-color: #f1fff2;
    color: #02012a;
  }
`;

const Body = ({ match }) => {
  const join = (base, path) => {
    return base.charAt(base.length - 1) === "/"
      ? base + path
      : base + "/" + path;
  };

  const linkList = docs
    .filter(
      (doc) =>
        match.url === "/" ||
        doc.leerdoel[match.url.replace("/", "").toUpperCase()]
    )
    .map((doc, i) => (
      <li key={i}>
        <Link to={join(match.url, doc.id)}>{doc.naam}</Link>
      </li>
    ));

  return (
    <BodyContainer>
      <DocumentList>{linkList}</DocumentList>
      <Route
        path={join(match.url, ":docId")}
        render={(props) => <Document data={docs} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => <div>Selecteer een document</div>}
      />
    </BodyContainer>
  );
};

export default Body;
