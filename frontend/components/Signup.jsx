import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import NextLink from "next/link";
import Router from "next/router";
import Link from "@components/Link";
import Button from "@components/Button";
import Card from "@components/Card";
import { Grid, Box, Relative, Absolute } from "@components/Layout";
import Image from "@components/Image";
import { Fieldset, Label, Input } from "@components/Form";
import { Text, Heading, Paragraph } from "@components/Typography";
import ErrorMessage from "@components/ErrorMessage";
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
            <Card
              boxShadowSize="md"
              css={{
                overflow: "hidden"
              }}
            >
              <Grid
                gridTemplateColumns={{ _: "1fr", sm: "0.75fr 1fr" }}
                alignItems="stretch"
                minHeight={550}
              >
                <Relative display={{ _: "none", sm: "block" }}>
                  <Image
                    alt="cash"
                    src="https://source.unsplash.com/ZKVBM2_Dp84/600x400"
                    height="100%"
                    css={{
                      objectFit: "cover",
                      objectPosition: 0,
                      filter: "contrast(0.3) brightness(1.5) saturate(0.5)"
                    }}
                  />
                  <Absolute
                    top="0"
                    right="0"
                    bottom="0"
                    left="0"
                    bg="primary"
                    css={{
                      mixBlendMode: "multiply"
                    }}
                  />
                </Relative>

                <Box p={4}>
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

                  <ErrorMessage error={error} />

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
                      <Button type="submit" width={1}>
                        {loading ? "Joining..." : "Join in"}
                      </Button>
                    </Fieldset>
                  </form>
                </Box>
              </Grid>
            </Card>
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
