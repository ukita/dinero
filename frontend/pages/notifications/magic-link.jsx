import React from "react";
import propTypes from "prop-types";
import Meta from "@components/Meta";
import { Container, Layout, Main, Box, Flex } from "@components/Layout";
import { Heading, Paragraph } from "@components/Typography";
import Card from "@components/Card";

import Mailbox from "../../assets/svg/mailbox.svg";

function MagicLink({ query = {} }) {
  const { email = "" } = query;

  return (
    <Layout>
      <Meta title="Dinero - Login" />
      <Main as="main" alignItems="center">
        <Container maxWidth={700}>
          <Card boxShadowSize="md" mx="auto">
            <Flex flexDirection="column" alignItems="center" p={4}>
              <Mailbox css={{ maxWidth: "400px", height: "auto" }} />
              <Box mt={4}>
                <Heading mb={3} fontSize={{ _: 4, sm: 5 }} textAlign="center">
                  An email is on its way!
                </Heading>
                <Paragraph textAlign="center">
                  We just sent an email to you at <strong>{email}</strong>
                </Paragraph>
                <Paragraph textAlign="center">
                  It contains a link that will sign you in super quick
                </Paragraph>
              </Box>
            </Flex>
          </Card>
        </Container>
      </Main>
    </Layout>
  );
}
MagicLink.propTypes = {
  query: propTypes.shape({
    email: propTypes.string
  })
};

export default MagicLink;
