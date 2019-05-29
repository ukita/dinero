import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

// eslint-disable-next-line no-undef
const GRAPHQL_URL = process.env.GRAPHQL_URL;

export default withApollo(
  ({ headers, initialState }) =>
    new ApolloClient({
      uri: GRAPHQL_URL,
      request: operation => {
        operation.setContext({
          fetchOptions: {
            credentials: "include"
          },
          headers
        });
      },
      cache: new InMemoryCache().restore(initialState || {})
    })
);
