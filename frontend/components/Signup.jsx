import React from 'react'
import styled from 'styled-components'

import Form from './styles/Form'
import Button from './styles/Button'

const StyledForm = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  align-items: stretch;
  overflow: hidden;

  .img {
    position: relative;
    width: 100%;
    height: 100%;

    :after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${({ theme }) => theme.colors.primary};
      mix-blend-mode: multiply;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0;
      filter: contrast(0.3) brightness(1.4) saturate(0.5);
    }
  }

  .logo {
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 500px;

    img {
      display: none;
    }
  }
`

function Signup () {
  return (
    <StyledForm>
      <div className='img'>
        <img alt='coins' src='https://source.unsplash.com/ZKVBM2_Dp84/600x400' />
      </div>

      <div>
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
