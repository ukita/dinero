/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "../../components/Card";

storiesOf("Components|Card", module)
  .add("Basic usage", () => {
    return (
      <Card m={4} boxShadowSize="md" p={4}>
        Hello
      </Card>
    );
  })
  .add("Variants", () => {
    return [
      <Card
        key="card-1"
        m={4}
        boxShadowSize="md"
        borderColor={"primary"}
        borderRadius={6}
        p={4}
      >
        Card 1
      </Card>,
      <Card key="card-2" m={4} boxShadowSize="xl" borderRadius={2} p={4}>
        Card 2
      </Card>,
      <Card
        key="card-3"
        m={4}
        bg="transparent"
        borderColor="primary"
        borderWidth={2}
        borderStyle="dashed"
        p={4}
      >
        Card 3
      </Card>,
      <Card key="card-4" m={4} bg="teal.2" boxShadowSize="lg" p={4}>
        Card 4
      </Card>
    ];
  });
