import React from "react";
import PropTypes from "prop-types";
import { ShoppingBag, LogIn, Plus } from "react-feather";

import WalletQuery from "@components/Wallet";
import { Text, Heading, Paragraph } from "@components/Typography";
import Card from "@components/Card";
import { getProp } from "@lib/utils";
import { Box, Flex } from "@components/Layout";
import Button from "@components/Button";

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
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading fontSize={3}>Transactions</Heading>
                  <Button scale="sm">
                    <Plus /> Transaction
                  </Button>
                </Flex>
                <Box mt={3}>
                  <Card boxShadowSize="md" p={2}>
                    <Flex>
                      <Flex alignItems="center" flexGrow={1}>
                        <ShoppingBag />
                        <Box ml={3}>
                          <Text as="b" display="block">
                            Transaction #1
                          </Text>
                          <Text
                            as="time"
                            display="block"
                            fontSize={1}
                            lineHeight={1}
                            color="gray"
                          >
                            10/10/2019 10:40
                          </Text>
                        </Box>
                      </Flex>
                      <Flex alignItems="center">
                        <Text as="b" color="red.4">
                          - $125.50
                        </Text>
                      </Flex>
                    </Flex>
                  </Card>
                  <Card boxShadowSize="md" p={2} mt={1}>
                    <Flex>
                      <Flex alignItems="center" flexGrow={1}>
                        <LogIn />
                        <Box ml={3}>
                          <Text as="b" display="block">
                            Transaction #2
                          </Text>
                          <Text
                            as="time"
                            display="block"
                            fontSize={1}
                            lineHeight={1}
                            color="gray"
                          >
                            10/10/2019 10:40
                          </Text>
                        </Box>
                      </Flex>
                      <Flex alignItems="center">
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
