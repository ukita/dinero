import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import FocusLock from "react-focus-lock";

import Portal from "@components/Portal";

const AnimatedOverlay = styled(animated.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: rgba(225, 225, 225, 0.5);
  position: fixed;
  z-index: 20;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: auto;
`;

function Overlay({
  children,
  isShown = false,
  shouldCloseOnClick = true,
  shouldCloseOnEscapePress = true,
  onRequestClose = () => {}
}) {
  useEffect(() => {
    function listener(event) {
      if (event.key === "Escape") {
        onRequestClose();
      }
    }

    if (shouldCloseOnEscapePress) {
      window.addEventListener("keyup", listener, false);
    }

    return () => {
      if (shouldCloseOnEscapePress) {
        window.removeEventListener("keyup", listener, false);
      }
    };
  }, [onRequestClose, shouldCloseOnEscapePress]);

  const close = () => {
    onRequestClose();
  };

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget || !shouldCloseOnClick) return;

    onRequestClose();
  };

  const transitions = useTransition(isShown, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, pointerEvents: "none" },
    config: { duration: 240 }
  });

  return (
    <Portal>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <FocusLock key={key}>
              <AnimatedOverlay style={props} onClick={handleBackdropClick}>
                {typeof children === "function"
                  ? children({ close })
                  : children}
              </AnimatedOverlay>
            </FocusLock>
          )
      )}
    </Portal>
  );
}
Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
  shouldCloseOnClick: PropTypes.bool,
  shouldCloseOnEscapePress: PropTypes.bool
};

export default Overlay;
