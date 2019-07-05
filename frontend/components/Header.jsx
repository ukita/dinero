import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import NextLink from "next/link";

import { Header as LayoutHeader, Flex } from "@components/Layout";
import { Link } from "@components/Typography";
import Signout from "@components/Signout";

import Logo from "../assets/svg/logo.svg";

const BorderHeader = styled(LayoutHeader)`
  position: relative;
  border-top-width: 4px;
  border-top-style: solid;
  border-image: ${themeGet("gradients.primary")} 5 stretch;
  box-shadow: ${themeGet("boxShadows.default")};
`;

function Header() {
  return (
    <BorderHeader bg="background" alignItems="center" py={2} px={3}>
      <Flex
        flexGrow={1}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxWidth={1280}
      >
        <NextLink href="/" passHref>
          <Link title="Dinero" aria-label="Dinero">
            <Logo width="50px" style={{ verticalAlign: "middle" }} />
          </Link>
        </NextLink>
        <Signout />
      </Flex>
    </BorderHeader>
  );
}

export default Header;
