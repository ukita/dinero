/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import {
  Label,
  Input,
  Textarea,
  Select,
  Fieldset,
  Checkbox
} from "../../components/Form";

storiesOf("Components|Form", module).add("Basic usage", () => {
  const disabled = boolean("Disabled", false);

  return (
    <Fieldset m={2} px={2} py={3} disabled={disabled}>
      <Label id="name" px={4} py={2}>
        Name
        <Input
          mt={1}
          id="name"
          placeholder="Name"
          type="text"
          defaultValue="John Doe"
        />
      </Label>
      <Label id="email" px={4} py={2}>
        Email
        <Input mt={1} id="email" placeholder="Email" type="email" />
      </Label>
      <Label id="password" px={4} py={2}>
        Password
        <Input mt={1} id="password" placeholder="Password" type="password" />
      </Label>
      <Label id="bio" px={4} py={2}>
        Bio
        <Textarea mt={1} id="bio" placeholder="Bio" rows={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Textarea>
      </Label>
      <Label id="color" px={4} py={2}>
        Color
        <Select mt={1} id="color">
          <option>red</option>
          <option>blue</option>
        </Select>
      </Label>
      <Label id="check" px={4} py={2} display="inline-block">
        <Checkbox id="check" name="check" mr={1} />
        checkbox
      </Label>
    </Fieldset>
  );
});
