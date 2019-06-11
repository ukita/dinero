import styled from "styled-components";
import { border } from "styled-system";
import propTypes from "@styled-system/prop-types";

import { Box } from "./Layout";

const Image = styled(Box)`
  max-width: 100%;
  height: auto;

  ${border}
`;

Image.defaultProps = {
  as: "img"
};

Image.propTypes = {
  ...Box.propTypes,
  ...propTypes.border
};

export default Image;
