import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const WalletsPage = {
  fragments: {
    full: gql`
      fragment WalletsPageFull on Wallet {
        id
        name
        description
        balance
        income
        expense
        transactions {
          id
          value
          description
          tags
          performedAt
        }
      }
    `,
    partial: gql`
      fragment WalletsPagePartial on Wallet {
        id
        name
        description
        balance
        income
        expense
      }
    `
  }
};

export const WALLETS_QUERY = gql`
  ${WalletsPage.fragments.partial}

  query WALLETS_QUERY {
    viewer {
      me {
        id
        wallets {
          ...WalletsPagePartial
        }
      }
    }
  }
`;

function Wallets({ children, ...props }) {
  return (
    <Query {...props} query={WALLETS_QUERY}>
      {payload => children(payload)}
    </Query>
  );
}

Wallets.propTypes = {
  children: PropTypes.func.isRequired
};

export default Wallets;
