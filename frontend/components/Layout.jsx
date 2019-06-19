import React from "react";
import styled from "styled-components";
import { space, layout, color, flex, grid, position } from "styled-system";
import propTypes from "@styled-system/prop-types";

export const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${flex}
  ${grid}
`;
Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.color,
  ...propTypes.grid
};

export const Flex = styled(Box)`
  display: flex;
`;
Flex.propTypes = {
  ...Box.propTypes
};

export const Grid = styled(Box)`
  display: grid;
`;
Grid.propTypes = {
  ...Box.propTypes
};

export const Layout = props => (
  <Flex {...props} minHeight="100vh" flexDirection="column" />
);
Layout.propTypes = {
  ...Flex.propTypes
};

export const Header = props => <Flex {...props} as="header" />;
Header.propTypes = {
  ...Flex.propTypes
};

export const Main = props => (
  <Flex {...props} flexGrow="1" flexShrink="1" flexBasis="auto" />
);
Main.propTypes = {
  ...Flex.propTypes
};

export const Container = ({ maxWidth = 1280, ...props }) => (
  <Box
    {...props}
    width="100%"
    minWidth={0}
    maxWidth={maxWidth}
    mx="auto"
    p={4}
  />
);
Container.propTypes = {
  ...Box.propTypes
};

export const Footer = props => <Flex {...props} as="footer" />;
Footer.propTypes = {
  ...Flex.propTypes
};

export const Relative = styled(Box)`
  position: relative;
  ${position}
`;
Relative.propTypes = {
  ...Box.propTypes,
  ...propTypes.position
};

export const Absolute = styled(Box)`
  position: absolute;
  ${position}
`;
Absolute.propTypes = {
  ...Box.propTypes,
  ...propTypes.position
};
