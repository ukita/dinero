import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {}

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
  }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter UI var alt', sans-serif; }
  }

  a {
    text-decoration: none;
  }
`

function Page ({ children = '' }) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {children}
        <GlobalStyle />
      </main>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
