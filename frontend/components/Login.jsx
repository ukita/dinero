import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import NextLink from "next/link";
import ErrorMessage from "@components/ErrorMessage";
import MagicLinkMessage from "@components/MagicLinkMessage";

import { Input, Label, Fieldset } from "@components/Form";
import Card from "@components/Card";
import Button from "@components/Button";
import Image from "@components/Image";
import { Box, Relative, Absolute, Grid } from "@components/Layout";
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
          return (
            <Card boxShadowSize="md" maxWidth="900px" mx="auto">
              <MagicLinkMessage email={email} />
            </Card>
          );
        }

        return (
          <Box>
            <Card
              boxShadowSize="md"
              maxWidth="900px"
              mx="auto"
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
                    Welcome back!
                  </Heading>
                  <Paragraph my={3} mx="auto" textAlign="center">
                    {
                      "Enter your email address, and we'll send a magic link to your inbox."
                    }
                    <span role="img" aria-label="Sparkles">
                      ✨
                    </span>
                  </Paragraph>

                  <ErrorMessage error={error} />

                  <form
                    method="post"
                    onSubmit={async e => {
                      e.preventDefault();
                      await login();
                    }}
                  >
                    <Fieldset disabled={loading}>
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
                      <Button type="submit" width={1}>
                        Log in
                      </Button>
                    </Fieldset>
                  </form>
                </Box>
              </Grid>
            </Card>
            <Box mt={4} mx="auto">
              <Text textAlign="center">
                Don&apos;t have an account yet?{" "}
                <NextLink href="/signup">
                  <Link href="/signup" prefetch>
                    Sign up
                  </Link>
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
