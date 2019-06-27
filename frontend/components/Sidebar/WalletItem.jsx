import React, { useMemo } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { Square } from "react-feather";

import { stringToColour } from "@lib/utils";
import { Box } from "@components/Layout";
import { Text } from "@components/Typography";

import Item from "./Item";

function WalletItem({ id, name }) {
  const color = useMemo(() => stringToColour(id), [id]);

  return (
    <Box key={id} as="li" mb={1}>
      <NextLink href={{ pathname: "/", query: { walletId: id } }} passHref>
        <Item as="a">
          <Square color={color} fill={color} />
          <Text as="span" ml={2}>
            {name}
          </Text>
        </Item>
      </NextLink>
    </Box>
  );
}
WalletItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
};

export default WalletItem;
