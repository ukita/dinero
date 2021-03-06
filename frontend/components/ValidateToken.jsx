import React, { useEffect } from "react";
import propTypes from "prop-types";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import NextLink from "next/link";
import Router from "next/router";

import { Heading, Paragraph } from "@components/Typography";
import Card from "@components/Card";
import { CURRENT_USER_QUERY } from "@components/CurrentUser";
import { getProp } from "@lib/utils";
import Meta from "./Meta";
import { Link } from "./Typography";

const CONFIRM_TOKEN_MUTATION = gql`
  mutation CONFIRM_TOKEN_MUTATION($token: ID!) {
    confirmToken(token: $token) {
      id
    }
  }
`;

function ValidateTokenWrapper({ validate, data, error }) {
  useEffect(() => {
    validate();
  }, [validate]);

  if (error) {
    return (
      <Card bg="transparent">
        <Meta title="Authentication failed - Dinero" />
        <Heading textAlign="center">Authentication failed</Heading>
        <Paragraph textAlign="center" mt={3}>
          It looks you have clicked on an invalid email verification link.
        </Paragraph>
        <Paragraph textAlign="center">
          <NextLink href="/login" replace passHref>
            <Link>Please try authenticating again.</Link>
          </NextLink>
        </Paragraph>
      </Card>
    );
  }

  if (getProp(data, "confirmToken.id")) {
    Router.replace("/");
  }

  return (
    <Card bg="transparent">
      <Meta title="Verifying... - Dinero" />
      <Heading textAlign="center">Verifying...</Heading>
    </Card>
  );
}
ValidateTokenWrapper.propTypes = {
  validate: propTypes.func.isRequired,
  data: propTypes.object,
  error: propTypes.object
};

function ValidateToken(props) {
  return (
    <Mutation
      mutation={CONFIRM_TOKEN_MUTATION}
      variables={props}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(validate, payload) => {
        return <ValidateTokenWrapper validate={validate} {...payload} />;
      }}
    </Mutation>
  );
}

export default ValidateToken;
