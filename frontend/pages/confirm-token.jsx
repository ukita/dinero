import React from "react";
import PropTypes from "prop-types";
import { Container, Layout, Main } from "@components/Layout";

import ValidateToken from "@components/ValidateToken";

function ConfirmTokenPage({ query }) {
  const { token } = query;

  return (
    <Layout>
      <Main as="main" alignItems="center">
        <Container>
          <ValidateToken token={token} />
        </Container>
      </Main>
    </Layout>
  );
}

ConfirmTokenPage.propTypes = {
  query: PropTypes.shape({ token: PropTypes.string.isRequired })
};

export default ConfirmTokenPage;
