import React from "react";
import styled from "styled-components";

const Document = ({ match, data }) => {
  const doc = data.find((d) => d.id == match.params.docId);
  let docData;

  if (doc)
    docData = (
      <div>
        <h3>{doc.naam}</h3>
        <p>{doc.text}</p>
      </div>
    );
  else docData = <p>Document bestaat niet</p>;

  return <div>{docData}</div>;
};

export default Document;
