/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";

import Button from "../components/Button";

storiesOf("Components|Button", module)
  .add("Basic usage", () => {
    return (
      <Button m={2} onClick={action("Clicked")}>
        Hey you!!
      </Button>
    );
  })
  .add("Sizes", () => {
    const variant = select("Variant", ["primary", "secondary", "tertiary"]);
    const color = select("Color", ["green", "red", "grey"]);

    return [
      <Button key="xs" scale="xs" color={color} variant={variant} m={2}>
        Extra Small
      </Button>,
      <Button key="sm" scale="sm" color={color} variant={variant} m={2}>
        Small
      </Button>,
      <Button key="md" scale="md" color={color} variant={variant} m={2}>
        Medium
      </Button>,
      <Button key="lg" scale="lg" color={color} variant={variant} m={2}>
        Large
      </Button>
    ];
  })
  .add("Block", () => {
    return (
      <Button mt={2} width={1}>
        Block
      </Button>
    );
  })
  .add("Variants", () => {
    const color = select("Color", ["green", "red", "grey"]);

    return [
      <Button key="primary" color={color} variant="primary" m={2}>
        Primary
      </Button>,
      <Button key="secondary" color={color} variant="secondary" m={2}>
        Secondary
      </Button>,
      <Button key="tertiary" color={color} variant="tertiary" m={2}>
        Tertiary
      </Button>
    ];
  })
  .add("Colors", () => {
    return [
      <Button key="green" onClick={action("Clicked")} m={2}>
        Green
      </Button>,
      <Button key="grey" color="grey" onClick={action("Clicked")} m={2}>
        Grey
      </Button>,
      <Button key="red" color="red" onClick={action("Clicked")} m={2}>
        Red
      </Button>
    ];
  })
  .add("Disabled", () => {
    const variant = select("Variant", ["primary", "secondary", "tertiary"]);

    return (
      <Button m={2} variant={variant} disabled>
        Do not click me!
      </Button>
    );
  });
