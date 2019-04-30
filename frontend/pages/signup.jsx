import React from 'react'
import styled from 'styled-components'

import SignupForm from '../components/Signup'
import Container from '../components/styles/Container'

const StyledSignup = styled.div`
  width: 100%;
  height: 100vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${Container} {
    width: auto;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;

    ${Container} {
      height: 100%;
    }
  }
`

function Signup () {
  return (
    <StyledSignup>
      <Container>
        <SignupForm />
      </Container>
    </StyledSignup>
  )
}

export default Signup
