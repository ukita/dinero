import styled from "styled-components";
import { border } from "styled-system";
import propTypes from "@styled-system/prop-types";

import { Box } from "./Layout";

const Image = styled(Box)`
  ${border}
`;

Image.defaultProps = {
  as: "img",
  maxWidth: "100%",
  height: "auto"
};

Image.propTypes = {
  ...Box.propTypes,
  ...propTypes.border
};

export default Image;
