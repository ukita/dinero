import React from "react";
import propTypes from "prop-types";
import { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import Card from "@components/Card";
import { Box, Positioner, Grid } from "@components/Layout";

function SessionBox({ children }) {
  return (
    <Card boxShadowSize="md" borderRadius={2} overflow="hidden">
      <Grid
        gridTemplateColumns={{ _: "1fr", sm: "0.75fr 1fr" }}
        alignItems="stretch"
      >
        <Positioner
          position="relative"
          display={{ _: "none", sm: "block" }}
          css={{
            backgroundImage:
              "url(https://source.unsplash.com/ZKVBM2_Dp84/600x500)",
            backgroundPosition: 0,
            backgroundSize: "cover",
            filter: "contrast(0.75) brightness(1) saturate(1.5)"
          }}
        >
          <Positioner
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            css={css`
              background-image: ${themeGet("gradients.primary")};
              mix-blend-mode: multiply;
            `}
          />
        </Positioner>
        <Box p={4}>{children}</Box>
      </Grid>
    </Card>
  );
}

SessionBox.propTypes = {
  children: propTypes.node
};

export default SessionBox;
