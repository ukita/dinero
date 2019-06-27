import React from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";

import Card from "@components/Card";
import Overlay from "@components/Overlay";
import { Flex } from "@components/Layout";

const AnimatedCard = animated(Card);

function Dialog({
  children,
  isShown = false,
  width = "750px",
  onCloseFinished = () => {},
  ...props
}) {
  const transitions = useTransition(isShown, null, {
    from: { transform: "scale(0.8)", opacity: 0 },
    enter: {
      transform: "scale(1)",
      opacity: 1
    },
    leave: { transform: "scale(0.8)", opacity: 0 },
    config: { duration: 200 }
  });

  const maxWidth = `calc(100% - 16px * 2)`;
  const topOffset = "12vmin";
  const maxHeight = `calc(100% - ${topOffset} * 2)`;

  return (
    <Overlay isShown={isShown} onExited={onCloseFinished}>
      {({ close }) =>
        transitions.map(
          ({ item, key, props: animatedProps }) =>
            item && (
              <AnimatedCard
                key={key}
                style={animatedProps}
                {...props}
                role="dialog"
                boxShadowSize="lg"
                width={width}
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                my={topOffset}
                display="flex"
                flexDirection="column"
              >
                <Flex p={3} flexDirection="column" overflow="auto">
                  {typeof children === "function"
                    ? children({ close })
                    : children}
                </Flex>
              </AnimatedCard>
            )
        )
      }
    </Overlay>
  );
}
Dialog.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  isShown: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCloseFinished: PropTypes.func
};

export default Dialog;
