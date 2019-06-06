import React from "react";

import Link from "@components/Link";
import StyledNav from "@components/styles/StyledNav";

function Nav() {
  return (
    <StyledNav>
      <Link prefetch href="/login" activeClassName="active">
        Sign in
      </Link>
      <Link prefetch href="/signup" activeClassName="active">
        Join in
      </Link>
    </StyledNav>
  );
}

export default Nav;
