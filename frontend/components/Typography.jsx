import React from "react";
import styled from "styled-components";
import { space, typography, color } from "styled-system";
import propTypes from "@styled-system/prop-types";

export const Text = styled.div`
  ${space}
  ${typography}
  ${color}
`;
Text.propTypes = {
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.color
};

export const Paragraph = props => <Text {...props} as="p" />;
Paragraph.propTypes = {
  ...Text.propTypes
};

export const Heading = ({
  fontSize = 5,
  fontWeight = "bold",
  lineHeight = "heading",
  ...props
}) => (
  <Text
    {...props}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    as="h1"
  />
);
Heading.propTypes = {
  ...Text.propTypes
};

export const Link = ({ ...props }) => <Text {...props} as="a" />;
Link.propTypes = {
  ...Link.propTypes
};
