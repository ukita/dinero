import styled, { css } from "styled-components";
import { layout, space } from "styled-system";
import propTypes from "@styled-system/prop-types";
import { themeGet } from "@styled-system/theme-get";
import t from "prop-types";

const scale = ({ scale }) => {
  switch (scale) {
    case "xs":
      return css`
        font-size: ${themeGet("fontSizes.0")}px;
        padding: 6px 8px;
      `;
    case "sm":
      return css`
        font-size: ${themeGet("fontSizes.1")}px;
        padding: 8px 10px;
      `;
    case "md":
      return css`
        font-size: inherit;
        padding: 12px 16px;
      `;
    case "lg":
      return css`
        font-size: ${themeGet("fontSizes.3")}px;
        padding: 15px 30px;
      `;
    default:
      return css`
        font-size: inherit;
        padding: 12px 16px;
      `;
  }
};

const buttonStyle = ({ variant, color }) => {
  const textColor = themeGet(`buttons.${color}.text`);
  const background = themeGet(`buttons.${color}.background`);
  const backgroundHover = themeGet(`buttons.${color}.backgroundHover`);

  switch (variant) {
    case "primary":
      return css`
        color: ${textColor};
        background-color: ${background};

        :hover,
        :focus {
          background-color: ${props =>
            props.disabled ? null : backgroundHover(props)};
        }
      `;
    case "secondary":
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
    case "tertiary":
      return css`
        background-color: transparent;
        color: ${background};

        :hover,
        :focus {
          background-color: transparent;
          color: ${props => (props.disabled ? null : backgroundHover(props))};
        }
      `;
    default:
      return css`
        color: ${textColor};
        background-color: ${background};

        :hover,
        :focus {
          background-color: ${props =>
            props.disabled ? null : backgroundHover(props)};
        }
      `;
  }
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
    opacity: 0.3;
    cursor: default;
  }

  :active,
  :focus {
    box-shadow: ${themeGet("boxShadows.outline")};
  }

  ${scale}
  ${buttonStyle}
  ${layout}
  ${space}
`;

Button.propTypes = {
  variant: t.oneOf(["primary", "secondary", "tertiary"]),
  scale: t.oneOf(["xs", "sm", "md", "lg"]),
  color: t.oneOf(["green", "grey", "red"]),
  outline: t.bool,
  ...propTypes.space,
  ...propTypes.layout
};

Button.defaultProps = {
  variant: "primary",
  color: "green",
  scale: "md"
};

export default Button;
