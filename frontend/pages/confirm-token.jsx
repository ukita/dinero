import React from 'react'
import PropTypes from 'prop-types'

import ValidateToken from '../components/ValidateToken'

function ConfirmTokenPage ({ query }) {
  const { token } = query

  return <ValidateToken token={token} />
}

ConfirmTokenPage.getInitialProps = async ({ query, res }) => {
  const { token } = query

  if (res && !token) {
    res.writeHead(307, {
      Location: '/'
    })

    res.end()
  }

  return { token }
}

ConfirmTokenPage.propTypes = {
  query: PropTypes.shape({ token: PropTypes.string.isRequired })
}

export default ConfirmTokenPage
