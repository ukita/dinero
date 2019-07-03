import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { Plus } from "react-feather";
import NextLink from "next/link";
import { themeGet } from "@styled-system/theme-get";
import { useTransition, useSpring, useChain, animated } from "react-spring";

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

function WalletList({ wallets, openDialog }) {
  const springRef = useRef();
  const spring = useSpring({
    ref: springRef,
    from: { opacity: 0, transform: "translateY(15px)" },
    to: { opacity: 1, transform: "translateY(0)" }
  });

  const transitionsRef = useRef();
  const transitions = useTransition(wallets, wallet => wallet.id, {
    unique: true,
    ref: transitionsRef,
    trail: 350 / wallets.length,
    from: { opacity: 0, transform: "translateY(15px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(15px)" }
  });

  useChain([transitionsRef, springRef], [0, 0.35]);

  return (
    <React.Fragment>
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.div key={key} style={{ ...props }}>
            <Card
              height="100%"
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
                  query: { id: item.id }
                }}
                passHref
              >
                <BlockLink p={3}>
                  <Truncate as={Heading} fontSize={3} mb={1}>
                    {item.name}
                  </Truncate>
                  <Truncate as={Paragraph} title={item.description}>
                    {item.description}
                  </Truncate>
                </BlockLink>
              </NextLink>
            </Card>
          </animated.div>
        );
      })}
      <animated.div style={spring}>
        <DashedCard
          as="button"
          p={3}
          bg="transparent"
          height="100%"
          width={1}
          onClick={openDialog}
        >
          <Flex justifyContent="center" alignItems="center" height="100%">
            <Plus height={35} width={35} />
          </Flex>
        </DashedCard>
      </animated.div>
    </React.Fragment>
  );
}

function Dashboard() {
  const [props, openDialog] = useCreateWalletDialog(false);

  return (
    <Layout>
      <CreateWalletDialog {...props} />
      <Meta title="Dinero" />
      <Header />
      <Flex bg="background" px={4} py={3} justifyContent="center">
        <Flex justifyContent="center" width={1} maxWidth={1000}>
          <Heading fontSize={{ _: 4, sm: 5 }}>My Wallets</Heading>
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
                    <WalletList wallets={wallets} openDialog={openDialog} />
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
