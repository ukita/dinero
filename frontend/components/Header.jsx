import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Link from "./Link";

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  font-weight: bolder;

  a {
    color: inherit;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 auto;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-top: 0.4rem solid ${({ theme }) => theme.colors.primary};

  .topbar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    min-height: 6.4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="topbar">
        <Logo>
          <Link prefetch href="/">
            Dinero
          </Link>
        </Logo>
        <Nav />
      </div>
    </StyledHeader>
  );
}

export default Header;
