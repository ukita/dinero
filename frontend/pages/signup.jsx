import React from "react";

import SignupForm from "@components/Signup";
import SessionPage from "@components/styles/SessionPage";
import Container from "@components/styles/Container";

function Signup() {
  return (
    <SessionPage>
      <Container>
        <SignupForm />
      </Container>
    </SessionPage>
  );
}

export default Signup;
