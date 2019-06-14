import React from "react";

import Head from "@components/Head";
import Header from "@components/Header";
import { Container, Layout, Main } from "@components/Layout";
import Card from "@components/Card";

import CurrentUser from "@components/CurrentUser";

import { getProp } from "@lib/utils";

function Home() {
  return (
    <Layout>
      <Head title="Dinero" />
      <Header />
      <Main as="main">
        <Container>
          <Card p={5} boxShadowSize="md">
            <CurrentUser>
              {({ data, loading }) => {
                if (loading) return "Loading";

                const user = getProp(data, "viewer.me");

                if (user) {
                  return user.name;
                }

                return "User not logged in";
              }}
            </CurrentUser>
          </Card>
        </Container>
      </Main>
    </Layout>
  );
}

export default Home;
