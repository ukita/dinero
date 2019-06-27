import React from "react";
import PropTypes from "prop-types";

import WalletQuery from "@components/Wallet";
import { Text, Heading, Paragraph } from "@components/Typography";
import Card from "@components/Card";
import { getProp } from "@lib/utils";
import { Box } from "@components/Layout";

function Wallet({ walletId = "" }) {
  return (
    <WalletQuery walletId={walletId}>
      {({ data }) => {
        const wallet = getProp(data, "viewer.wallet", null);

        if (wallet) {
          return (
            <Box>
              <Box p={3}>
                <Heading>{wallet.name}</Heading>
                <Paragraph>{wallet.description}</Paragraph>
              </Box>
              <Box mt={2}>
                <Card boxShadowSize="md" p={3}>
                  <Text>Transaction #1</Text>
                </Card>
                <Card boxShadowSize="md" p={3} mt={3}>
                  <Text>Transaction #1</Text>
                </Card>
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
