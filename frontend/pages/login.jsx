import React from "react";

import { Container, Layout, Main } from "@components/Layout";
import Meta from "@components/Meta";
import LoginForm from "@components/Login";

function Login() {
  return (
    <Layout>
      <Meta title="Dinero - Login" />
      <Main as="main" alignItems="center">
        <Container maxWidth={900}>
          <LoginForm />
        </Container>
      </Main>
    </Layout>
  );
}

export default Login;
