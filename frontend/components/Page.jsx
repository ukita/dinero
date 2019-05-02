import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const breakpoints = {
  sm: '768px'
}

const theme = {
  breakpoints,
  colors: {
    white: 'white',
    black: 'black',

    primary: '#199473',
    darkPrimary: '#0C6B58',

    lighterGray: '#f5f7fa',
    lightGray: '#edf2f7',
    gray: '#8795a1',
    darkGray: '#4a5568',
    darkerGray: '#243B53'
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
    color: ${({ theme }) => theme.colors.darkerGray};
    background: ${({ theme }) => theme.colors.lightGray};
  }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter UI var alt', sans-serif; }
  }

  a {
    color: inherit;
    vertical-align: baseline;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
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
        {children}
      </>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
