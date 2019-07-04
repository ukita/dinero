import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTransition, useSpring, useChain, animated } from "react-spring";
import NextLink from "next/link";
import { Plus } from "react-feather";
import { themeGet } from "@styled-system/theme-get";

import { Heading, BlockLink, Truncate } from "@components/Typography";
import MoneyText from "@components/MoneyText";
import { Flex } from "@components/Layout";
import Card from "@components/Card";
import CreateWalletDialog, {
  useCreateWalletDialog
} from "@components/CreateWalletDialog";

const DashedCard = styled(Card)`
  color: ${themeGet("colors.gray")};
  border: 2px dashed ${themeGet("colors.gray")};

  :hover,
  :focus {
    background: ${themeGet("colors.gray")}20;
  }
`;

function WalletList({ wallets = [] }) {
  const [props, openDialog] = useCreateWalletDialog(false);

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
      <CreateWalletDialog {...props} />
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.div key={key} style={{ ...props }}>
            <Card height="100%" boxShadowSize="md">
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
                  <MoneyText fontSize={5} amount={item.balance} />
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
WalletList.propTypes = {
  wallets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default WalletList;
