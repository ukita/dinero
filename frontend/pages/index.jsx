import React from "react";
import Router from "next/router";
import { Layout, Main } from "@components/Layout";
import CurrentUser from "@components/CurrentUser";

import { getProp } from "@lib/utils";
import Spinner from "@components/Spinner";
import Dashboard from "@components/Dashboard";

function Index() {
  return (
    <CurrentUser>
      {({ data }) => {
        const user = getProp(data, "viewer.me", null);
        if (user) {
          return <Dashboard />;
        }

        if (process.browser) {
          Router.replace("/login");
        }

        return (
          <Layout>
            <Main>
              <Spinner alignSelf="center" mx="auto" />
            </Main>
          </Layout>
        );
      }}
    </CurrentUser>
  );
}

export default Index;
