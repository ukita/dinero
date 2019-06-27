import React from "react";
import PropTypes from "prop-types";

import WalletQuery from "@components/Wallet";
import { Text, Heading, Paragraph } from "@components/Typography";
import Card from "@components/Card";
import { getProp } from "@lib/utils";
import { Box, Flex } from "@components/Layout";
import { ShoppingBag, LogIn } from "react-feather";

function Wallet({ walletId = "" }) {
  return (
    <WalletQuery walletId={walletId}>
      {({ data }) => {
        const wallet = getProp(data, "viewer.wallet", null);

        if (wallet) {
          return (
            <Box p={3}>
              <Box>
                <Heading>{wallet.name}</Heading>
                <Paragraph>{wallet.description}</Paragraph>
              </Box>
              <Box mt={4}>
                <Heading fontSize={3}>Transactions</Heading>
                <Box mt={3}>
                  <Card boxShadowSize="md" p={3}>
                    <Flex>
                      <Flex alignItems="center" flexGrow={1}>
                        <ShoppingBag />
                        <Box ml={3}>
                          <Text as="b">Transaction #1</Text>
                          <Paragraph fontSize={1} color="gray">
                            10/10/2019 10:30
                          </Paragraph>
                        </Box>
                      </Flex>
                      <Flex>
                        <Text as="b" color="red.4">
                          - $125.50
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>
                  <Card boxShadowSize="md" p={3} mt={3}>
                    <Flex>
                      <Flex alignItems="center" flexGrow={1}>
                        <LogIn />
                        <Box ml={3}>
                          <Text as="b">Transaction #2</Text>
                          <Paragraph fontSize={1} color="gray">
                            10/10/2019 10:40
                          </Paragraph>
                        </Box>
                      </Flex>
                      <Flex>
                        <Text as="b" color="teal.4">
                          $50
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>
                </Box>
              </Box>
            </Box>
          );
        }

        return "You don't have any wallet yet";
      }}
    </WalletQuery>
  );
}
Wallet.propTypes = {
  walletId: PropTypes.string
};

export default Wallet;
