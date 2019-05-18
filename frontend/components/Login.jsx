import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

import Link from './Link'
import ErrorMessage from './ErrorMessage'
import MagicLinkMessage from './MagicLinkMessage'
import SessionForm from './styles/SessionForm'
import Form from './styles/Form'
import Button from './styles/Button'
import Box from './styles/Box'

import { useInput } from '../lib/hooks'
import { getProp } from '../lib/utils'

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!) {
    login: signin(email: $email) {
      message
    }
  }
`

function Login () {
  const [email, setEmail] = useInput('')

  return (
    <Mutation mutation={LOGIN_MUTATION} variables={{ email }}>
      {(login, { data, loading, error }) => {
        const message = getProp(data, 'login.message')

        if (message) {
          return (
            <Box>
              <MagicLinkMessage email={email} />
            </Box>
          )
        }

        return (
          <Box>
            <SessionForm>
              <div className='img'>
                <img alt='cash' src='https://source.unsplash.com/ZKVBM2_Dp84/600x400' />
              </div>

              <div className='form'>
                <h1 className='logo'>
                  <span role='img' aria-label='Dinero'>
                    💰
                  </span>
                </h1>
                <div className='title'>
                  <h1>Welcome back!</h1>
                  <p>
                    Enter your email address, and we'll send a magic link to your inbox.{' '}
                    <span role='img' aria-label='Sparkles'>
                      ✨
                    </span>
                  </p>
                </div>
                <ErrorMessage error={error} />
                <Form
                  method='post'
                  onSubmit={async e => {
                    e.preventDefault()
                    await login()
                  }}
                >
                  <fieldset disabled={loading}>
                    <label htmlFor='email'>
                      Your email
                      <input
                        id='email'
                        name='email'
                        type='email'
                        value={email}
                        onChange={setEmail}
                        placeholder='johndoe@email.com'
                        required
                      />
                    </label>
                    <Button type='submit' block>
                      Log in
                    </Button>
                  </fieldset>
                </Form>
                <div className='links'>
                  <Link href='/signup' prefetch>
                    Don’t have an account? Sign Up
                  </Link>
                </div>
              </div>
            </SessionForm>
          </Box>
        )
      }}
    </Mutation>
  )
}

export default Login
