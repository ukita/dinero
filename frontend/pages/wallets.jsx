import React from "react";
import PropTypes from "prop-types";
import Wallet from "@components/Wallet";

function Wallets({ query }) {
  const { id } = query;

  return (
    <Wallet walletId={id}>
      {({ data }) => {
        return <pre>{JSON.stringify(data, undefined, 4)}</pre>;
      }}
    </Wallet>
  );
}
Wallets.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string
  })
};

export default Wallets;
