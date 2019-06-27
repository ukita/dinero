import React from "react";

import { Layout, Main } from "@components/Layout";
import CurrentUser from "@components/CurrentUser";
import Home from "@components/Home";

import { getProp } from "@lib/utils";
import Spinner from "@components/Spinner";
import Dashboard from "@components/Dashboard";

function Index(props) {
  return (
    <CurrentUser>
      {({ data, loading }) => {
        if (loading)
          return (
            <Layout>
              <Main>
                <Spinner alignSelf="center" mx="auto" />
              </Main>
            </Layout>
          );

        const user = getProp(data, "viewer.me", null);
        if (user) {
          return <Dashboard {...props} />;
        }

        return <Home />;
      }}
    </CurrentUser>
  );
}

export default Index;
