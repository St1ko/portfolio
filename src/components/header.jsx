import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #45445e;
  padding: 20px;
  height: 80px;

  nav {
    a {
      border: 2px solid transparent;
      text-decoration: none;
      font-weight: 600;
      padding: 10px;
      margin-right: 20px;
    }

    a.selected,
    a:hover {
      border: 2px solid #45445e;
    }

    a:active {
      background-color: #f1fff2;
      color: #02012a;
    }
  }
`;

const Header = ({ pages }) => {
  return (
    <StyledHeader>
      <nav>
        {pages.map(
          (page, idx) =>
            page.path !== "/" && (
              <NavLink to={page.path} activeClassName="selected" key={idx}>
                {page.name}
              </NavLink>
            )
        )}
      </nav>
    </StyledHeader>
  );
};

export default Header;
