import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const WALLETS_QUERY = gql`
  query WALLETS_QUERY {
    viewer {
      me {
        id
        wallets {
          id
          name
          description
          income
          expense
          transactions {
            id
          }
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
