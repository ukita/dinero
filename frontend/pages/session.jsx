import React from 'react'
import styled from 'styled-components'

import Signup from '../components/Signup'

const StyledSession = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

function Session () {
  return (
    <StyledSession>
      <Signup />
    </StyledSession>
  )
}

export default Session
