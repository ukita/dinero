import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Header from './Header'

const theme = {
  breakpoints: {
    sm: '768px'
  },
  colors: {
    white: 'white',
    black: 'black',

    primary: '#27AB83',
    darkPrimary: '#147D64',

    lightGray: '#edf2f7',
    gray: '#a0aec0',
    darkGray: '#4a5568',
    darkerGray: '#243B53'
  }
}

const InnerPage = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

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
        <Header />
        <InnerPage>{children}</InnerPage>
      </>
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.node
}

export default Page
