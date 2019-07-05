import React from "react";

import Meta from "@components/Meta";
import Header from "@components/Header";
import { Layout, Container, Main, Grid, Flex } from "@components/Layout";
import { Heading } from "@components/Typography";
import Wallets from "@components/Wallets";
import { getProp } from "@lib/utils";
import Spinner from "@components/Spinner";

import WalletList from "./WalletList";

function Dashboard() {
  return (
    <Layout>
      <Meta title="Dinero - Wallets" />
      <Header />
      <Flex bg="background" px={4} py={3} justifyContent="center">
        <Flex justifyContent="center" width={1} maxWidth={1000}>
          <Heading fontSize={{ _: 4, sm: 5 }}>My Wallets</Heading>
        </Flex>
      </Flex>
      <Main as="main">
        <Container>
          <Flex flexDirection="column">
            <Wallets>
              {({ data, loading }) => {
                if (loading) {
                  return (
                    <Flex justifyContent="center">
                      <Spinner />
                    </Flex>
                  );
                }

                const wallets = getProp(data, "viewer.me.wallets", []);
                return (
                  <Grid
                    justifyContent="center"
                    gridRowGap="30px"
                    gridColumnGap="30px"
                    gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                    gridAutoRows="175px"
                    flexGrow={1}
                  >
                    <WalletList wallets={wallets} />
                  </Grid>
                );
              }}
            </Wallets>
          </Flex>
        </Container>
      </Main>
    </Layout>
  );
}

export default Dashboard;
