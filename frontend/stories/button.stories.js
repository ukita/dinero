/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";

storiesOf("Components|Button", module)
  .add("Basic usage", () => {
    return <Button onClick={action("Clicked")}>Hey you!!</Button>;
  })
  .add("Sizes", () => {
    return [
      <Button key="sm" scale="sm" mr={2}>
        Small
      </Button>,
      <Button key="md" scale="md" mr={2}>
        Medium
      </Button>,
      <Button key="lg" scale="lg" mr={2}>
        Large
      </Button>
    ];
  })
  .add("Block", () => {
    return <Button width={1}>Block</Button>;
  })
  .add("Outline", () => {
    return [
      <Button
        key="primary"
        variant="primary"
        onClick={action("Clicked")}
        outline
        mr={2}
      >
        Primary
      </Button>,
      <Button
        key="secondary"
        variant="secondary"
        onClick={action("Clicked")}
        outline
        mr={2}
      >
        Secondary
      </Button>,
      <Button
        key="red"
        variant="red"
        onClick={action("Clicked")}
        outline
        mr={2}
      >
        Red
      </Button>
    ];
  })
  .add("Variants", () => {
    return [
      <Button key="primary" variant="primary" mr={2}>
        Primary
      </Button>,
      <Button key="secondary" variant="secondary" mr={2}>
        Secondary
      </Button>,
      <Button key="red" variant="red" mr={2}>
        Red
      </Button>
    ];
  })
  .add("Disabled", () => {
    return <Button disabled>Disabled!!!</Button>;
  });
