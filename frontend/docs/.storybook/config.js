import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

import Page from "../../components/Page";

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(storyFn => <Page>{storyFn()}</Page>);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
