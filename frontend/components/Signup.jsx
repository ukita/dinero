import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import NextLink from "next/link";
import Router from "next/router";

import Button from "@components/Button";
import { Fieldset, Label, Input } from "@components/Form";
import { Text, Heading, Paragraph, Link } from "@components/Typography";
import { Box } from "@components/Layout";
import ErrorMessage from "@components/ErrorMessage";
import SessionBox from "@components/SessionBox";
import { useInput } from "@lib/hooks";
import { getProp } from "@lib/utils";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($name: String!, $email: String!) {
    signup(name: $name, email: $email) {
      message
    }
  }
`;

function Signup() {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ name, email }}>
      {(signup, { data, error, loading }) => {
        const message = getProp(data, "signup.message");

        if (message) {
          Router.push({
            pathname: "/notifications/magic-link",
            query: { email }
          });

          return null;
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

              <Heading fontSize={6} textAlign="center">
                Create your free account
              </Heading>
              <Paragraph my={3} mx="auto" textAlign="center">
                Fill up the form below, and we will send you a magic link to
                your inbox.{" "}
                <span role="img" aria-label="Sparkles">
                  ✨
                </span>
              </Paragraph>

              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await signup();
                }}
              >
                <Fieldset disabled={loading}>
                  <Label id="name" htmlFor="name" my={3}>
                    Name
                    <Input
                      mt={2}
                      id="name"
                      name="name"
                      type="name"
                      value={name}
                      onChange={setName}
                      placeholder="John Doe"
                      required
                    />
                  </Label>
                  <Label id="email" htmlFor="email" my={3}>
                    Email
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
                    {loading ? "Joining..." : "Join in"}
                  </Button>
                </Fieldset>
              </form>
            </SessionBox>
            <Box mt={4} mx="auto">
              <Text textAlign="center">
                Already have an account?{" "}
                <NextLink href="/login" passHref>
                  <Link>Log In</Link>
                </NextLink>
              </Text>
            </Box>
          </Box>
        );
      }}
    </Mutation>
  );
}

export default Signup;
