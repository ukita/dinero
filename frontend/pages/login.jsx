import React from "react";

import LoginForm from "@components/Login";
import Head from "@components/Head";
import { Container, Layout, Main } from "@components/Layout";

function Login() {
  return (
    <Layout>
      <Head title="Dinero - Login" />
      <Main as="main">
        <Container maxWidth={550}>
          <LoginForm />
        </Container>
      </Main>
    </Layout>
  );
}

export default Login;
