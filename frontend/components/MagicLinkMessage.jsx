import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Mailbox from '../assets/svg/mailbox.svg'

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  padding: 2rem 5rem;

  .content {
    h2 {
      text-align: center;
    }

    p {
      margin: 0;
    }
  }
`

function MagicLinkMessage ({ email = '' }) {
  return (
    <StyledMessage>
      <Mailbox />
      <div className='content'>
        <h2>An email is on its way!</h2>
        <p>
          We just sent an email to you at <strong>{email}</strong>
        </p>
        <p>It contains a link that will sign you in super quick</p>
      </div>
    </StyledMessage>
  )
}

MagicLinkMessage.propTypes = {
  email: PropTypes.string
}

export default MagicLinkMessage
