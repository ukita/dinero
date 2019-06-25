import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Plus, Square, LogOut } from "react-feather";
import NextLink from "next/link";

import { Box, Flex } from "@components/Layout";
import { Text } from "@components/Typography";
import Button from "@components/Button";

import Logo from "../assets/svg/logo.svg";

const Item = styled(Flex)`
  color: ${themeGet("colors.gray")};
  border-radius: ${themeGet("radii.3")}px;

  :hover,
  :focus {
    text-decoration: none;
    color: ${themeGet("colors.text")};
    background-color: ${themeGet("colors.lightgray")};
  }
`;
Item.defaultProps = {
  p: 2,
  alignItems: "center"
};

function Sidebar() {
  return (
    <Flex
      as="section"
      bg="background"
      maxWidth={250}
      minWidth={250}
      flexDirection="column"
    >
      <Flex as="header" pt={3}>
        <Logo width="40px" style={{ margin: "0 auto" }} />
      </Flex>
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
        <Box p={3}>
          <Box>
            <Box p={2}>
              <Text as="b">Wallets</Text>
            </Box>
            <ul>
              <Box as="li" mb={1}>
                <NextLink
                  href={{ pathname: "/", query: { wallet: "1" } }}
                  passHref
                >
                  <Item as="a">
                    <Square color="#D64545" fill="#D64545" />
                    <Text as="span" ml={2}>
                      Wallet 1
                    </Text>
                  </Item>
                </NextLink>
              </Box>
              <Box as="li" mb={1}>
                <NextLink
                  href={{ pathname: "/", query: { wallet: "2" } }}
                  passHref
                >
                  <Item as="a">
                    <Square color="#724BB7" fill="#724BB7" />
                    <Text as="span" ml={2}>
                      Wallet 2
                    </Text>
                  </Item>
                </NextLink>
              </Box>
              <Box as="li" mb={1}>
                <Item>
                  <Plus />
                  <Text as="span" ml={2}>
                    New wallet
                  </Text>
                </Item>
              </Box>
            </ul>
          </Box>
        </Box>
        <Box p={3}>
          <Button as="a" scale="sm" width={1}>
            <LogOut />
            Sign out
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
