import React from "react";
import styled, { css } from "styled-components";
import { Plus } from "react-feather";
import NextLink from "next/link";
import { themeGet } from "@styled-system/theme-get";

import Meta from "@components/Meta";
import Header from "@components/Header";
import { Layout, Container, Main, Grid, Flex } from "@components/Layout";
import { Heading, Truncate, BlockLink } from "@components/Typography";
import Card from "@components/Card";
import Wallets from "@components/Wallets";
import { getProp } from "@lib/utils";
import Spinner from "@components/Spinner";
import CreateWalletDialog, {
  useCreateWalletDialog
} from "@components/CreateWalletDialog";
import { Paragraph } from "./Typography";

const DashedCard = styled(Card)`
  color: ${themeGet("colors.gray")};
  border: 2px dashed ${themeGet("colors.gray")};

  :hover,
  :focus {
    background: ${themeGet("colors.gray")}20;
  }
`;

function Dashboard() {
  const [props, openDialog] = useCreateWalletDialog(false);

  return (
    <Layout>
      <CreateWalletDialog {...props} />
      <Meta title="Dinero" />
      <Header />
      <Flex bg="background" px={4} py={3} justifyContent="center">
        <Flex justifyContent="center" width={1} maxWidth={1000}>
          <Heading fontSize={5}>My Wallets</Heading>
        </Flex>
      </Flex>
      <Main as="main">
        <Container>
          <Flex flexDirection="column">
            <Wallets>
              {({ data, loading }) => {
                if (loading) {
                  return (
                    <Flex justifyContent="center">
                      <Spinner />
                    </Flex>
                  );
                }

                const wallets = getProp(data, "viewer.me.wallets", []);

                return (
                  <Grid
                    justifyContent="center"
                    gridRowGap="30px"
                    gridColumnGap="30px"
                    gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                    gridAutoRows="175px"
                    flexGrow={1}
                  >
                    {wallets.map(wallet => (
                      <Card
                        key={wallet.id}
                        boxShadowSize="md"
                        css={css`
                          transition: box-shadow ease-in-out 0.2s;

                          :hover,
                          :focus {
                            box-shadow: ${themeGet("boxShadows.lg")};
                          }
                        `}
                      >
                        <NextLink
                          href={{
                            pathname: "/wallets",
                            query: { id: wallet.id }
                          }}
                          passHref
                          shallow
                        >
                          <BlockLink p={3}>
                            <Truncate as={Heading} fontSize={3} mb={1}>
                              {wallet.name}
                            </Truncate>
                            <Truncate as={Paragraph} title={wallet.description}>
                              {wallet.description}
                            </Truncate>
                          </BlockLink>
                        </NextLink>
                      </Card>
                    ))}
                    <DashedCard
                      as="button"
                      onClick={openDialog}
                      p={3}
                      bg="transparent"
                    >
                      <Flex
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                      >
                        <Plus height={35} width={35} />
                      </Flex>
                    </DashedCard>
                  </Grid>
                );
              }}
            </Wallets>
          </Flex>
        </Container>
      </Main>
    </Layout>
  );
}

export default Dashboard;
