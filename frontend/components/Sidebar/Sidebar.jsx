import React from "react";
import { Plus } from "react-feather";

import { Box, Flex } from "@components/Layout";
import { Text } from "@components/Typography";
import CreateWalletDialog, {
  useCreateWalletDialog
} from "@components/CreateWalletDialog";
import Wallets from "@components/Wallets";
import Signout from "@components/Signout";
import { getProp } from "@lib/utils";

import Logo from "../../assets/svg/logo.svg";

import Item from "./Item";
import WalletItem from "./WalletItem";

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
                    <WalletItem
                      key={wallet.id}
                      id={wallet.id}
                      name={wallet.name}
                    />
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
          <Signout />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
