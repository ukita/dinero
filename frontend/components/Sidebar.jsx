import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Plus, Square } from "react-feather";

import { Box, Flex } from "@components/Layout";
import { Text } from "@components/Typography";

import Logo from "../assets/svg/logo.svg";

const Item = styled(Flex)`
  color: ${themeGet("colors.textSecondary")};
  border-radius: ${themeGet("radii.3")}px;

  :hover,
  :focus {
    color: ${themeGet("colors.text")};
    background-color: ${themeGet("colors.hover")};
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
              <li>
                <Item>
                  <Square color="#D64545" fill="#D64545" />
                  <Text as="span" ml={2}>
                    Wallet 1
                  </Text>
                </Item>
              </li>
              <li>
                <Item>
                  <Square color="#724BB7" fill="#724BB7" />
                  <Text as="span" ml={2}>
                    Wallet 2
                  </Text>
                </Item>
              </li>
              <li>
                <Item>
                  <Plus />
                  <Text as="span" ml={2}>
                    New wallet
                  </Text>
                </Item>
              </li>
            </ul>
          </Box>
        </Box>
        <Box p={3}>Footer</Box>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
