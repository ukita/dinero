import React from 'react'
import styled from 'styled-components'

import Form from './styles/Form'
import Button from './styles/Button'

const StyledForm = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  width: 100%;
  max-height: 550px;
  height: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  align-items: stretch;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo {
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    ${Form} {
      padding: 0 3rem 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    max-height: none;
    height: auto;

    img {
      display: none;
    }
  }
`

function Signup () {
  return (
    <StyledForm>
      <img
        alt='coins'
        src='https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80'
      />

      <div className='form'>
        <h1 className='logo'>
          <span role='img' aria-label='Dinero'>
            💰
          </span>
        </h1>
        <Form method='post'>
          <h2>Welcome!</h2>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </h5>
          <label htmlFor='name'>
            Name
            <input id='name' name='name' type='name' placeholder='John Doe' />
          </label>
          <label htmlFor='email'>
            Email
            <input id='email' name='email' type='email' placeholder='johndoe@email.com' />
          </label>
          <Button type='submit' block>
            Join in
          </Button>
        </Form>
      </div>
    </StyledForm>
  )
}

export default Signup
