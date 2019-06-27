import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { LogOut } from "react-feather";

import Button from "@components/Button";

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => (
  <Mutation mutation={SIGN_OUT_MUTATION}>
    {(signout, { client, called, loading, error }) => {
      if (called && !loading && !error) client.resetStore();

      return (
        <Button scale="sm" width={1} onClick={signout}>
          <LogOut />
          Sign out
        </Button>
      );
    }}
  </Mutation>
);

export default Signout;
