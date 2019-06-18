import React from "react";

import Head from "@components/Head";
import { Layout, Main, Container } from "@components/Layout";
import SignupForm from "@components/Signup";

function Signup() {
  return (
    <Layout>
      <Head title="Dinero - Sign Up" />
      <Main as="main">
        <Container maxWidth={550}>
          <SignupForm />
        </Container>
      </Main>
    </Layout>
  );
}

export default Signup;
