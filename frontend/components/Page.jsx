import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import theme from "../theme";
import FocusVisible from "./FocusVisible";

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  :root {
    --primary-color: ${themeGet("colors.primary")};
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${themeGet("fonts.body")};
    font-size: ${themeGet("fontSizes.body")};
    line-height: ${themeGet("lineHeights.body")};
    color: ${themeGet("colors.text")};
    background: ${themeGet("colors.body")};
  }

  input, textarea, select, button {
    font-family: inherit;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure,
  p,
  pre {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: ${themeGet("colors.link")};
    text-decoration: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: inherit;
    opacity: 0.65;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  /* Enable focus only with keyboard events */
  .js-focus-visible {
    *:focus:not([data-focus-visible-added]) {
      outline: 0;
    }
  }
`;

function Page({ children = "" }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <FocusVisible />
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
