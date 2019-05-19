import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    viewer {
      me {
        id
        name
        email
      }
    }
  }
`

function CurrentUser ({ children, ...props }) {
  return (
    <Query {...props} query={CURRENT_USER_QUERY}>
      {payload => children(payload)}
    </Query>
  )
}

CurrentUser.propTypes = {
  children: PropTypes.func.isRequired
}

export default CurrentUser
