import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  color: #2e2e35;

  ::-webkit-scrollbar {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }

  a {
    font-weight: 600;
    color: #6361bf;
    text-decoration: none;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.1);

    &:hover {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  table {
    border-collapse: collapse;
  }

  tr > :first-child {
    border-right: 2px solid black;
  }

  tr th:not(:first-child) {
    border-bottom: 2px solid black;
  }

  th,
  td {
    text-align: left;
    padding: 5px 10px;
  }
`;

const Title = styled.h1`
  font-family: "Merriweather";
  margin-bottom: 0.5em;
`;

const H2 = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const TagContainer = styled.div`
  margin-bottom: 40px;
`;

const Tag = styled.span`
  font-style: italic;
  margin-right: 10px;
  color: ${({ category }) =>
    (category === "SCO" && "#93486e") ||
    (category === "UX" && "#6473d6") ||
    (category === "PO" && "#c68a07") ||
    (category === "DEV" && "#438e8b") ||
    "#4c515d"};
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 40px;
  object-fit: contain;
`;

const Document = ({ match, data }) => {
  const doc = data.find((d) => d.id === Number(match.params.docId));
  let docData;

  if (doc)
    docData = (
      <React.Fragment>
        <Title>{doc.naam}</Title>
        <TagContainer>
          {doc.leerdoelen.map((leerdoel, idx) => (
            <Tag
              category={Object.keys(leerdoel)[0]}
              key={`${Object.keys(leerdoel)[0]}-${idx}`}
            >{`#${leerdoel[Object.keys(leerdoel)[0]]}`}</Tag>
          ))}
        </TagContainer>
        <H2>Aanleiding</H2>
        <p dangerouslySetInnerHTML={{ __html: doc.aanleiding }} />
        {doc.onderzoeksvraag && (
          <p>
            <em>{doc.onderzoeksvraag}</em>
          </p>
        )}
        <H2>Uitvoering</H2>
        <p dangerouslySetInnerHTML={{ __html: doc.uitvoering }} />
        {doc.bevindingen && (
          <React.Fragment>
            <H2>Bevindingen</H2>
            <p dangerouslySetInnerHTML={{ __html: doc.bevindingen }} />
          </React.Fragment>
        )}
        {doc.plaatjes &&
          doc.plaatjes.map((p) => (
            <Image key={p} src={require(`assets/images/${p}`)} alt="" />
          ))}
      </React.Fragment>
    );
  else docData = <p>Document bestaat niet</p>;

  return <Container>{docData}</Container>;
};

export default Document;
