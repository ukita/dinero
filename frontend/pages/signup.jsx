import React from "react";

import Meta from "@components/Meta";
import { Layout, Main, Container } from "@components/Layout";
import SignupForm from "@components/Signup";

function Signup() {
  return (
    <Layout>
      <Meta title="Dinero - Sign Up" />
      <Main as="main" alignItems="center">
        <Container maxWidth={900}>
          <SignupForm />
        </Container>
      </Main>
    </Layout>
  );
}

export default Signup;
