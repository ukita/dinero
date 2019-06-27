import React from "react";
import PropTypes from "prop-types";

import Meta from "@components/Meta";
import { Layout, Container, Main } from "@components/Layout";

import CurrentUser from "@components/CurrentUser";
import Sidebar from "@components/Sidebar";
import Wallet from "./Wallet";

function Dashboard({ query }) {
  const { walletId } = query;

  return (
    <CurrentUser>
      {() => {
        return (
          <Layout>
            <Meta title="Dashboard - Dinero" />
            <Main as="main">
              <Sidebar />
              <Container>
                <Wallet walletId={walletId} />
              </Container>
            </Main>
          </Layout>
        );
      }}
    </CurrentUser>
  );
}
Dashboard.propTypes = {
  query: PropTypes.shape({
    walletId: PropTypes.string
  }).isRequired
};

export default Dashboard;
