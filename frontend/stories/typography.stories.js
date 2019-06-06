/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";

import { Text, Paragraph, Heading, Link } from "../components/Typography";

storiesOf("Typography|Text", module).add("Basic usage", () => {
  return (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Text>
  );
});

storiesOf("Typography|Paragraph", module).add("Basic usage", () => {
  return [
    <Paragraph key="1" pb={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Paragraph>,
    <Paragraph key="2">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>
  ];
});

storiesOf("Typography|Heading", module).add("Basic usage", () => {
  return <Heading>I am a Heading</Heading>;
});

storiesOf("Typography|Link", module).add("Basic usage", () => {
  return (
    <Paragraph>
      This is a link{" "}
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click me</Link>
    </Paragraph>
  );
});
