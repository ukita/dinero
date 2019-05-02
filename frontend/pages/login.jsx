import React from 'react'

import LoginForm from '../components/Login'
import SessionPage from '../components/styles/SessionPage'
import Container from '../components/styles/Container'

function Login () {
  return (
    <SessionPage>
      <Container>
        <LoginForm />
      </Container>
    </SessionPage>
  )
}

export default Login
