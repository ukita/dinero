import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { getApplicationHost } from "./utils";

/* eslint-disable no-undef */
const getGraphqlURL = (headers = {}) => {
  const GRAPHQL_URL = process.env.GRAPHQL_URL;

  if (process.browser) {
    return GRAPHQL_URL;
  }

  const host = getApplicationHost(headers);
  return `${host}${GRAPHQL_URL}`;
};
/* eslint-enable */

export default withApollo(({ headers, initialState }) => {
  return new ApolloClient({
    uri: getGraphqlURL(headers),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    },
    cache: new InMemoryCache().restore(initialState || {})
  });
});
