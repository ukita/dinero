import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import Link from "./Link";
import Error from "./ErrorMessage";
import MagicLinkMessage from "./MagicLinkMessage";
import Box from "./styles/Box";
import SessionForm from "./styles/SessionForm";
import Form from "./styles/Form";
import Button from "./styles/Button";

import { useInput } from "../lib/hooks";
import { getProp } from "../lib/utils";

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
          return (
            <Box>
              <MagicLinkMessage email={email} />
            </Box>
          );
        }

        return (
          <Box>
            <SessionForm>
              <div className="img">
                <img
                  alt="cash"
                  src="https://source.unsplash.com/ZKVBM2_Dp84/600x400"
                />
              </div>
              <div className="form">
                <h1 className="logo">
                  <span role="img" aria-label="Dinero">
                    💰
                  </span>
                </h1>
                <div className="title">
                  <h1>Create your free account</h1>
                  <p>
                    Fill up the form below, and we will send you a magic link to
                    your inbox.{" "}
                    <span role="img" aria-label="Sparkles">
                      ✨
                    </span>
                  </p>
                </div>
                <Error error={error} />
                <Form
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault();
                    await signup();
                  }}
                >
                  <fieldset disabled={loading}>
                    <label htmlFor="name">
                      Name
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={setName}
                        placeholder="John Doe"
                        required
                      />
                    </label>
                    <label htmlFor="email">
                      Email
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={setEmail}
                        placeholder="johndoe@email.com"
                        required
                      />
                    </label>
                    <Button type="submit" block>
                      {loading ? "Joining..." : "Join in"}
                    </Button>
                  </fieldset>
                </Form>
                <div className="links">
                  <Link href="/login" prefetch>
                    Already have an account? Log In
                  </Link>
                </div>
              </div>
            </SessionForm>
          </Box>
        );
      }}
    </Mutation>
  );
}

export default Signup;
