import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import { Flex } from "@components/Layout";

const Item = styled(Flex)`
  font-size: inherit;
  appearance: none;
  background: transparent;
  border: none;
  width: 100%;
  color: ${themeGet("colors.gray")};
  border-radius: ${themeGet("radii.3")}px;

  :hover,
  :focus {
    text-decoration: none;
    color: ${themeGet("colors.text")};
    background-color: ${themeGet("colors.lightgray")};
  }
`;
Item.defaultProps = {
  p: 2,
  alignItems: "center"
};

export default Item;
