import styled, { css } from "styled-components";
import { width, space } from "styled-system";
import propTypes from "@styled-system/prop-types";
import { themeGet } from "@styled-system/theme-get";

const scale = ({ scale }) => {
  switch (scale) {
    case "sm":
      return css`
        font-size: ${themeGet("fontSizes.1")}px;
        padding: 7px 12px;
      `;
    case "md":
      return css`
        font-size: inherit;
        padding: 9.5px 18px;
      `;
    case "lg":
      return css`
        font-size: ${themeGet("fontSizes.3")}px;
        padding: 12px 22px;
      `;
  }
};

const variant = ({ variant, outline }) => {
  const color = themeGet(`buttons.${variant}.text`);
  const background = themeGet(`buttons.${variant}.background`);
  const backgroundHover = themeGet(`buttons.${variant}.backgroundHover`);

  if (outline) {
    return css`
      background-color: transparent;
      color: ${background};
      box-shadow: inset 0 0 0 2px ${background};

      :hover,
      :focus {
        background-color: transparent;
        color: ${props => (props.disabled ? null : backgroundHover(props))};
        box-shadow: inset 0 0 0 2px
          ${props => (props.disabled ? null : backgroundHover(props))};
      }
    `;
  }

  return css`
    color: ${color};
    background-color: ${background};

    :hover,
    :focus {
      background-color: ${props =>
        props.disabled ? null : backgroundHover(props)};
    }
  `;
};

const Button = styled("button")`
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  border-width: 0;
  border-style: solid;
  font-size: inherit;
  font-weight: ${themeGet("fontWeights.bold")};
  border-radius: ${themeGet("radius")};

  :disabled {
    opacity: 0.45;
  }

  ${scale}
  ${variant}
  ${width}
  ${space}
`;

Button.propTypes = {
  ...propTypes.space,
  width: propTypes.layout.width
};

Button.defaultProps = {
  variant: "primary",
  outline: false,
  scale: "md"
};

export default Button;
