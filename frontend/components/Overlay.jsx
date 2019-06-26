import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import FocusLock from "react-focus-lock";

import Portal from "@components/Portal";

const AnimatedOverlay = styled(animated.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.75);
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
  onBeforeClose = () => {},
  onExited = () => {}
}) {
  const [exiting, setExiting] = useState(false);
  const [exited, setExited] = useState(!isShown);
  const [prevIsShown, setPrevIsShown] = useState(null);

  if (isShown !== prevIsShown) {
    setPrevIsShown(isShown);
  }

  if (!prevIsShown && isShown) {
    setExited(false);
  }

  const close = () => {
    const shouldClose = onBeforeClose();
    if (shouldClose !== false) {
      setExiting(true);
    }
  };

  const onEsc = e => {
    // Esc key
    if (e.keyCode === 27 && shouldCloseOnEscapePress) {
      close();
    }
  };

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget || !shouldCloseOnClick) {
      return;
    }

    close();
  };

  const handleTransitionRest = () => {
    document.addEventListener("keydown", onEsc, false);
  };

  const handleTransitionDestroyed = isActive => {
    if (isActive) {
      setExiting(false);
      setExited(true);
      onExited();
      document.removeEventListener("keydown", onEsc, false);
    }
  };

  const transitions = useTransition(isShown && !exiting, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 240 },
    onRest: handleTransitionRest,
    onDestroyed: handleTransitionDestroyed
  });

  if (exited) return null;

  return (
    <Portal>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <AnimatedOverlay
              key={key}
              style={props}
              onClick={handleBackdropClick}
            >
              <FocusLock>
                {typeof children === "function"
                  ? children({ close })
                  : children}
              </FocusLock>
            </AnimatedOverlay>
          )
      )}
    </Portal>
  );
}
Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  isShown: PropTypes.bool,
  shouldCloseOnClick: PropTypes.bool,
  shouldCloseOnEscapePress: PropTypes.bool,
  onBeforeClose: PropTypes.func,
  onExited: PropTypes.func
};

export default Overlay;
