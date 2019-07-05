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
  const textColor = themeGet(`buttons.${color}.text`, "#FFF");
  const background = themeGet(`buttons.${color}.background`, "#000");
  const hover = themeGet(`buttons.${color}.hover`, "#222");
  const active = themeGet(`buttons.${color}.active`, "#111");

  switch (variant) {
    case "primary":
      return css`
        color: ${textColor};
        background-color: ${background};

        :hover,
        :focus {
          color: ${textColor};
          background-color: ${props => (props.disabled ? null : hover(props))};
        }

        :active {
          color: ${textColor};
          background-color: ${props => (props.disabled ? null : active(props))};
        }
      `;
    case "secondary":
      return css`
        background-color: transparent;
        color: ${background};
        box-shadow: inset 0 0 0 2px ${background};

        :hover,
        :focus {
          color: ${props => (props.disabled ? null : hover(props))};
          box-shadow: inset 0 0 0 2px
            ${props => (props.disabled ? null : hover(props))};
        }

        :active {
          color: ${props => (props.disabled ? null : active(props))};
          box-shadow: inset 0 0 0 2px
            ${props => (props.disabled ? null : active(props))};
        }
      `;
    case "tertiary":
      return css`
        background-color: transparent;
        color: ${background};

        :hover,
        :focus {
          background-color: transparent;
          color: ${props => (props.disabled ? null : hover(props))};
        }

        :active {
          color: ${props => (props.disabled ? null : active(props))};
          text-decoration: underline;
        }
      `;
    default:
      return css`
        color: ${textColor};
        background-color: ${background};

        :hover,
        :focus {
          color: ${textColor};
          background-color: ${props => (props.disabled ? null : hover(props))};
        }

        :active {
          color: ${textColor};
          background-color: ${props => (props.disabled ? null : active(props))};
        }
      `;
  }
};

const Button = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  border-width: 0;
  border-style: solid;
  font-size: inherit;
  font-weight: ${themeGet("fontWeights.bold")};
  border-radius: ${themeGet("radius")};
  transition: all 0.2s ease 0s;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  :hover {
    text-decoration: none;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    width: 1.25em;
    height: 1.25em;
    margin: 0 0.45em;
  }

  ${scale}
  ${buttonStyle}
  ${layout}
  ${space}
`;

Button.propTypes = {
  variant: t.oneOf(["primary", "secondary", "tertiary"]),
  scale: t.oneOf(["xs", "sm", "md", "lg"]),
  color: t.oneOf([
    "teal",
    "grey",
    "blue",
    "red",
    "primary",
    "warning",
    "highlight"
  ]),
  ...propTypes.space,
  ...propTypes.layout
};

Button.defaultProps = {
  variant: "primary",
  color: "primary",
  scale: "md"
};

export default Button;
