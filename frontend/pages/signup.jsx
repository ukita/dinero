import React from 'react'
import styled from 'styled-components'

import SignupForm from '../components/Signup'
import Container from '../components/styles/Container'

const StyledSignup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

function Signup () {
  return (
    <Container>
      <StyledSignup>
        <SignupForm />
      </StyledSignup>
    </Container>
  )
}

export default Signup
