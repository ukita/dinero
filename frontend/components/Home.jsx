import React from "react";

import Meta from "@components/Meta";
import Header from "@components/Header";
import { Layout, Container, Main } from "@components/Layout";
import Card from "./Card";

function Home() {
  return (
    <Layout>
      <Meta title="Dinero" />
      <Header />
      <Main as="main">
        <Container>
          <Card px={3} py={4} boxShadow="md">
            User not logged in
          </Card>
        </Container>
      </Main>
    </Layout>
  );
}

export default Home;
