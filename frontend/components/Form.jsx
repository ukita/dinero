import styled, { css } from "styled-components";
import { layout, space, typography, color } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import propTypes from "@styled-system/prop-types";
import t from "prop-types";

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  transition: all 0.2s ease 0s;

  :disabled {
    opacity: 0.5;
  }

  ${space}
  ${color}
`;
Fieldset.propTypes = {
  ...propTypes.space,
  ...propTypes.color
};

export const Label = styled.label`
  display: block;
  margin: 0;

  ${layout}
  ${space}
  ${typography}
  ${color}
`;
Label.propTypes = {
  id: t.string.isRequired,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography
};
Label.defaultProps = {
  fontWeight: "bold"
};

const borders = ({ color, ...props }) => {
  const borderColor = color
    ? themeGet(`colors.${color}`)(props)
    : themeGet("colors.grey.3")(props);

  const focusColor = color ? borderColor : themeGet("colors.primary")(props);

  return css`
    border-color: ${borderColor};
    box-shadow: 0 0 0 2px ${borderColor};

    :focus {
      outline: 0;
      border-color: ${focusColor};
      box-shadow: 0 0 0 3px ${focusColor};
    }
  `;
};

export const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-width: 0;
  border-style: solid;
  padding: 8px 12px;
  margin: 0;
  line-height: 1.5;
  font-size: ${themeGet("fontSizes.body")};
  border-radius: ${themeGet("radius")};
  transition: all 0.2s ease 0s;

  :disabled {
    opacity: 0.5;
  }

  ${borders}
  ${space}
`;

Input.propTypes = {
  id: t.string.isRequired,
  color: t.string,
  ...propTypes.space
};

export const Select = styled(Input)`
  appearance: none;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  color-adjust: exact;
  padding-right: calc(24px + 1em);
`;
Select.defaultProps = {
  as: "select"
};

export const Textarea = styled(Input)``;
Textarea.defaultProps = {
  as: "textarea"
};

export const Checkbox = styled.input`
  display: inline-block;
  appearance: none;
  vertical-align: middle;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  color: ${themeGet("colors.primary")};
  border-radius: ${themeGet("radii.2")}px;
  border: 2px solid ${themeGet("colors.grey.3")};
  background-color: transparent;
  background-origin: border-box;
  user-select: none;
  color-adjust: exact;
  flex-shrink: 0;
  margin: 0;
  transition: all 0.2s ease 0s;

  :checked {
    background-color: currentColor;
    border-color: currentColor;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  ${color}
  ${space}
`;
Checkbox.propTypes = {
  id: t.string.isRequired,
  color: t.string,
  ...propTypes.space
};
Checkbox.defaultProps = {
  size: 16,
  type: "checkbox"
};
