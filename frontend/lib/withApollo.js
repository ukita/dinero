import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'

const GRAPHQL_URL = process.env.GRAPHQL_URL

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      fetchOptions: { credentials: 'include' },
      cache: new InMemoryCache().restore(initialState || {})
    })
)
