import styled from "styled-components";
import { border, background } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import propTypes from "@styled-system/prop-types";
import t from "prop-types";

import { Box } from "./Layout";

const boxShadow = props => {
  const { boxShadowSize } = props;

  return { boxShadow: themeGet(`boxShadows.${boxShadowSize}`, "")(props) };
};

const Card = styled(Box)`
  ${boxShadow}
  ${border}
  ${background}
`;

Card.propTypes = {
  ...propTypes.border,
  ...propTypes.background,
  boxShadowSize: t.oneOf(["sm", "md", "lg", "xl"]),
  borderColor: t.string,
  borderWidth: t.oneOf([0, 1, 2])
};

Card.defaultProps = {
  bg: "card",
  boxShadowSize: "",
  borderColor: "",
  borderRadius: 2
};

export default Card;
