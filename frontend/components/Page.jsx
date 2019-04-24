import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    white: 'white',
    black: 'black',

    primary: '#667eea',

    lightGray: '#edf2f7',
    gray: '#a0aec0',
    darkGray: '#4a5568'
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter-ui.css');

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'Inter UI', sans-serif;
    color: ${({ theme }) => theme.colors.darkGray};
  }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter UI var alt', sans-serif; }
  }

  a {
    text-decoration: none;
  }

  input, textarea, select, button {
    font-family: inherit;
  }
`

function Page ({ children = '' }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
