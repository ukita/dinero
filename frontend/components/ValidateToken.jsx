import React, { useEffect } from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import Router from 'next/router'

import { CURRENT_USER_QUERY } from './CurrentUser'
import { getProp } from '../lib/utils'

const CONFIRM_TOKEN_MUTATION = gql`
  mutation CONFIRM_TOKEN_MUTATION($token: ID!) {
    confirmToken(token: $token) {
      id
    }
  }
`

// eslint-disable-next-line react/prop-types
function ValidateToken ({ validate, data, error, loading }) {
  useEffect(() => {
    validate()
  }, [validate])

  if (loading) return 'Loading...'
  if (error) return <pre>{JSON.stringify(error, undefined, 2)}</pre>

  if (getProp(data, 'confirmToken.id')) {
    Router.replace('/')
  }

  return null
}

function ValidateTokenWrapper (props) {
  return (
    <Mutation
      mutation={CONFIRM_TOKEN_MUTATION}
      variables={props}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(validate, payload) => <ValidateToken validate={validate} {...payload} />}
    </Mutation>
  )
}

export default ValidateTokenWrapper
