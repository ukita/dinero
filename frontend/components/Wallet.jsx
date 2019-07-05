import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { WalletsPage } from "@components/Wallets";

export const WALLET_QUERY = gql`
  ${WalletsPage.fragments.full}

  query WALLET_QUERY($walletId: String) {
    viewer {
      wallet(id: $walletId) {
        ...WalletsPageFull
      }
    }
  }
`;

function Wallet({ children, walletId, ...props }) {
  return (
    <Query {...props} query={WALLET_QUERY} variables={{ walletId }}>
      {payload => children(payload)}
    </Query>
  );
}

Wallet.propTypes = {
  children: PropTypes.func.isRequired,
  walletId: PropTypes.string
};

export default Wallet;
