import React from "react";

import Meta from "@components/Meta";
import { Layout, Container, Main } from "@components/Layout";
import Card from "./Card";
import CurrentUser from "./CurrentUser";

function Dashboard() {
  return (
    <CurrentUser>
      {({ data }) => {
        console.log(data);

        return (
          <Layout>
            <Meta title="Dashboard - Dinero" />
            <Main as="main">
              <Container>
                <Card px={3} py={4} boxShadow="md">
                  User logged
                </Card>
              </Container>
            </Main>
          </Layout>
        );
      }}
    </CurrentUser>
  );
}

export default Dashboard;
