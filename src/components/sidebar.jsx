import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.aside`
  background-color: #f2f4f7;
  width: 24%;
  padding: 50px 30px;
  border-radius: 10px 0 0 10px;
`;

const H1 = styled.h1`
  font-size: 16px;
  margin-bottom: 0;
`;

const H2 = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #4c515d;
`;

const StyledLink = styled.a`
  float: right;
  font-weight: 600;
  color: #6361bf;
  text-decoration: none;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.1);

  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const DocumentList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    font-weight: 600;
    padding: 7px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  li:before {
    content: "🖍";
    margin-right: 1rem;
    font-size: 12px;
  }

  a {
    padding: 5px 0;
    text-decoration: none;
    color: #4c515d;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Filter = styled.div`
  padding: 2px 20px;
  margin: 0 10px 10px 0;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  color: ${({ active, category }) =>
    (!active && "#4c515d") ||
    (category === "SCO" && "#93486e") ||
    (category === "UX" && "#6473d6") ||
    (category === "PO" && "#c68a07") ||
    (category === "DEV" && "#438e8b")};
  background-color: ${({ active, category }) =>
    (!active && "#e8ebf2") ||
    (category === "SCO" && "#dbb6c8") ||
    (category === "UX" && "#c9cef2") ||
    (category === "PO" && "#fcda8f") ||
    (category === "DEV" && "#b6dbcd")};

  &:last-child {
    margin-right: 0;
  }
`;

const Sidebar = ({ allDocuments }) => {
  const [filters, setFilters] = useState(new Set());
  const [documents, setDocuments] = useState(allDocuments);

  const linkList = documents.map((doc, i) => (
    <li key={i}>
      <Link to={`/${doc.id}`}>{doc.naam}</Link>
    </li>
  ));

  const toggleCategoryFilter = (category) => {
    const newSet = new Set(filters);
    if (filters.has(category)) {
      newSet.delete(category);
      setFilters(newSet);
    } else {
      newSet.add(category);
      setFilters(newSet);
    }
  };

  useEffect(() => {
    if (filters.size === 0) {
      setDocuments(allDocuments);
    } else {
      setDocuments(
        allDocuments.filter(({ leerdoelen }) =>
          leerdoelen.some((r) => filters.has(Object.keys(r)[0]))
        )
      );
    }
  }, [filters, allDocuments]);

  return (
    <Container>
      <H1>Stijn Albert</H1>
      <StyledLink href="documents/leeswijzer.pdf" target="_blank">
        Leeswijzer
      </StyledLink>
      <H2>Portfolio S6</H2>
      <FiltersContainer>
        {["SCO", "UX", "PO", "DEV"].map((category) => (
          <Filter
            category={category}
            key={category}
            onClick={() => toggleCategoryFilter(category)}
            active={filters.has(category)}
          >
            {category}
          </Filter>
        ))}
      </FiltersContainer>
      <DocumentList>{linkList}</DocumentList>
    </Container>
  );
};

export default Sidebar;
