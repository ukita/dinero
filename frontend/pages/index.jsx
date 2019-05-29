import React from "react";

import Head from "../components/Head";
import Header from "../components/Header";
import Container from "../components/styles/Container";
import CurrentUser from "../components/CurrentUser";

import { getProp } from "../lib/utils";

function Home() {
  return (
    <>
      <Header />
      <Head title="Home" />
      <Container>
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
      </Container>
    </>
  );
}

export default Home;
