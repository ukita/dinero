/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";

import {
  Layout,
  Header,
  Footer,
  Main,
  Box,
  Flex,
  Grid,
  Container,
  Relative,
  Absolute
} from "../components/Layout";

storiesOf("Components|Box", module).add("Basic usage", () => {
  return (
    <Box p={10} bg="red">
      <Box p={20} m={15} bg="white">
        Box 1
      </Box>
      <Box p={20} m={15} bg="white">
        Box 2
      </Box>
      <Box p={20} m={15} bg="white">
        Box 3
      </Box>
    </Box>
  );
});

storiesOf("Components|Position", module).add("Basic usage", () => {
  return (
    <Relative p={5} zIndex={-1} bg="blue.1">
      <Absolute p={3} m={2} bg="blue.3" top={0} right={0}>
        Absolute
      </Absolute>

      <Absolute p={3} m={2} bg="blue.3" bottom={0} left={0}>
        Absolute
      </Absolute>
    </Relative>
  );
});

storiesOf("Components|Flex", module).add("Basic usage", () => {
  return (
    <Flex p={10} justifyContent="space-between" bg="white">
      <Box p={15} bg="red">
        Left
      </Box>
      <Box p={15} bg="red">
        Center
      </Box>
      <Box p={15} bg="red">
        Right
      </Box>
    </Flex>
  );
});

storiesOf("Components|Grid", module).add("Basic usage", () => {
  return (
    <Grid
      gridTemplateColumns="25% 1fr"
      gridTemplateRows="auto"
      alignItems="stretch"
      bg="white"
      height={100}
    >
      <Box bg="green">Sidebar</Box>
      <Box bg="red">Content</Box>
    </Grid>
  );
});

storiesOf("Components|Layout", module)
  .add("Basic usage", () => {
    return (
      <Layout bg="white" m={2}>
        Simple Layout component
      </Layout>
    );
  })
  .add("Full layout", () => {
    return (
      <Layout>
        <Header p={10} bg="primary">
          Header
        </Header>
        <Main>
          <Container bg="grey">Hello</Container>
        </Main>
        <Footer p={10} bg="red">
          Footer
        </Footer>
      </Layout>
    );
  });
