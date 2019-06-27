import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";

import Meta from "@components/Meta";
import { Layout, Container, Main } from "@components/Layout";

import CurrentUser from "@components/CurrentUser";
import Sidebar from "@components/Sidebar";
import Wallet from "./Wallet";

function Dashboard({ router }) {
  const {
    query: { walletId }
  } = router;

  return (
    <CurrentUser>
      {() => {
        return (
          <Layout>
            <Meta title="Dashboard - Dinero" />
            <Main as="main">
              <Sidebar />
              <Container maxWidth="890px">
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
  router: PropTypes.shape({
    query: PropTypes.shape({
      walletId: PropTypes.string
    })
  })
};

export default withRouter(Dashboard);
