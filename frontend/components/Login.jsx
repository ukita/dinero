import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import NextLink from "next/link";
import Router from "next/router";

import ErrorMessage from "@components/ErrorMessage";
import Button from "@components/Button";
import { Input, Label, Fieldset } from "@components/Form";
import { Box } from "@components/Layout";
import SessionBox from "@components/SessionBox";
import { Text, Heading, Paragraph, Link } from "@components/Typography";

import { useInput } from "@lib/hooks";
import { getProp } from "@lib/utils";

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!) {
    login: signin(email: $email) {
      message
    }
  }
`;

function Login() {
  const [email, setEmail] = useInput("");

  return (
    <Mutation mutation={LOGIN_MUTATION} variables={{ email }}>
      {(login, { data, loading, error }) => {
        const message = getProp(data, "login.message");

        if (message) {
          Router.push({
            pathname: "/notifications/magic-link",
            query: { email }
          });
        }

        return (
          <Box>
            <Box mb={2}>
              <ErrorMessage error={error} />
            </Box>

            <SessionBox>
              <Text textAlign="center" fontSize={6}>
                <span role="img" aria-label="Dinero">
                  💰
                </span>
              </Text>

              <Heading fontSize={{ _: 4, sm: 6 }} textAlign="center">
                Welcome back!
              </Heading>
              <Paragraph my={3} mx="auto" textAlign="center">
                {
                  "Enter your email address, and we'll send a magic link to your inbox. "
                }
                <span role="img" aria-label="Sparkles">
                  ✨
                </span>
              </Paragraph>

              <Box
                as="form"
                method="post"
                pb={5}
                onSubmit={async e => {
                  e.preventDefault();
                  await login();
                }}
              >
                <Fieldset disabled={loading || message}>
                  <Label id="email" htmlFor="email" my={3}>
                    Your email
                    <Input
                      mt={2}
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder="johndoe@email.com"
                      required
                    />
                  </Label>
                  <Button type="submit" width={1} mt={2}>
                    Log in
                  </Button>
                </Fieldset>
              </Box>
            </SessionBox>
            <Box mt={4} mx="auto">
              <Text textAlign="center">
                Don&apos;t have an account yet?{" "}
                <NextLink href="/signup" passHref>
                  <Link>Sign up</Link>
                </NextLink>
              </Text>
            </Box>
          </Box>
        );
      }}
    </Mutation>
  );
}

export default Login;
