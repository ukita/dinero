import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Plus, Square, LogOut } from "react-feather";
import NextLink from "next/link";

import { Box, Flex } from "@components/Layout";
import { Text } from "@components/Typography";
import Button from "@components/Button";
import CreateWalletDialog, {
  useCreateWalletDialog
} from "@components/CreateWalletDialog";
import Wallets from "@components/Wallets";
import { getProp, stringToColour } from "@lib/utils";

import Logo from "../assets/svg/logo.svg";

const Item = styled(Flex)`
  font-size: inherit;
  appearance: none;
  background: transparent;
  border: none;
  width: 100%;
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
  const [props, openDialog] = useCreateWalletDialog(false);

  return (
    <Flex
      as="section"
      bg="background"
      maxWidth={250}
      minWidth={250}
      flexDirection="column"
    >
      <CreateWalletDialog {...props} />
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
              <Wallets>
                {({ data }) => {
                  const wallets = getProp(data, "viewer.me.wallets", []);

                  return wallets.map(wallet => (
                    <Box key={wallet.id} as="li" mb={1}>
                      <NextLink
                        href={{ pathname: "/", query: { wallet: wallet.id } }}
                        passHref
                      >
                        <Item as="a">
                          <Square
                            color={stringToColour(wallet.id)}
                            fill={stringToColour(wallet.id)}
                          />
                          <Text as="span" ml={2}>
                            {wallet.name}
                          </Text>
                        </Item>
                      </NextLink>
                    </Box>
                  ));
                }}
              </Wallets>
              <Box as="li" mb={1}>
                <Item as="button" onClick={openDialog}>
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
