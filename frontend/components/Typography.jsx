import React from "react";
import styled from "styled-components";
import { space, typography, color, display } from "styled-system";
import propTypes from "@styled-system/prop-types";

export const Text = styled.div`
  ${space}
  ${typography}
  ${color}
  ${display}
`;
Text.propTypes = {
  display: propTypes.layout.display,
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.color
};

export const Paragraph = props => <Text {...props} as="p" />;
Paragraph.propTypes = {
  ...Text.propTypes
};

export const Truncate = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
Truncate.propTypes = {
  ...Text.propTypes
};

export const Heading = ({
  fontSize = 5,
  fontWeight = "bold",
  lineHeight = "heading",
  as = "h2",
  ...props
}) => (
  <Text
    {...props}
    as={as}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
  />
);
Heading.propTypes = {
  ...Text.propTypes
};

export const Link = ({ ...props }) => <Text {...props} as="a" />;
Link.propTypes = {
  ...Link.propTypes
};

export const BlockLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  height: 100%;
  width: 100%;

  :hover {
    text-decoration: none;
  }
`;
BlockLink.propTypes = {
  ...Link.propTypes
};
