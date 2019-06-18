import React from "react";

import { Container, Layout, Main } from "@components/Layout";
import Head from "@components/Head";
import LoginForm from "@components/Login";

function Login() {
  return (
    <Layout>
      <Head title="Dinero - Login" />
      <Main as="main" alignItems="center">
        <Container maxWidth={900}>
          <LoginForm />
        </Container>
      </Main>
    </Layout>
  );
}

export default Login;
