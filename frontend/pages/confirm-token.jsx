import React from "react";
import PropTypes from "prop-types";
import Meta from "@components/Meta";
import { Container, Layout, Main } from "@components/Layout";

import ValidateToken from "@components/ValidateToken";

function ConfirmTokenPage({ query }) {
  const { token } = query;

  return (
    <Layout>
      <Meta title="Dinero - Login" />
      <Main as="main" alignItems="center">
        <Container>
          <ValidateToken token={token} />
        </Container>
      </Main>
    </Layout>
  );
}

ConfirmTokenPage.getInitialProps = async ({ query, res }) => {
  const { token } = query;

  if (res && !token) {
    res.writeHead(307, {
      Location: "/"
    });

    res.end();
  }

  return { token };
};

ConfirmTokenPage.propTypes = {
  query: PropTypes.shape({ token: PropTypes.string.isRequired })
};

export default ConfirmTokenPage;
