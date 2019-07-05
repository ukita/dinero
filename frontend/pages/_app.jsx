import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import nextCookie from "next-cookies";
import NProgress from "nprogress";
import { ApolloProvider } from "react-apollo";
import Page from "@components/Page";
import withApollo from "@lib/withApollo";
import ColorModeProvider from "@components/ColorModeProvider";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      try {
        pageProps = await Component.getInitialProps(ctx);
      } catch (error) {
        pageProps.error = error;
      }
    }

    const { theme } = nextCookie(ctx);

    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps, theme };
  }

  render() {
    const { Component, pageProps, apollo, theme } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ColorModeProvider theme={theme}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ColorModeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
