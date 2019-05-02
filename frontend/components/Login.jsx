import React from 'react'

import Link from './Link'
import SessionForm from './styles/SessionForm'
import Form from './styles/Form'
import Button from './styles/Button'

function Login () {
  return (
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
        <Form method='post'>
          <label htmlFor='email'>
            Your email
            <input id='email' name='email' type='email' placeholder='johndoe@email.com' />
          </label>
          <Button type='submit' block>
            Log in
          </Button>
        </Form>
        <div className='links'>
          <Link href='/signup' prefetch>
            Don’t have an account? Sign Up
          </Link>
        </div>
      </div>
    </SessionForm>
  )
}

export default Login
