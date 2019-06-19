/*eslint-env node*/
import React from "react";
import { storiesOf } from "@storybook/react";

import Image from "../../components/Image";

storiesOf("Components|Image", module).add("Basic usage", () => {
  return (
    <Image
      m={4}
      width={[1, 1, 1 / 2]}
      src="https://source.unsplash.com/random/1280x720"
      borderRadius={8}
    />
  );
});
