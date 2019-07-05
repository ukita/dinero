import React, { useState } from "react";
import PropTypes from "prop-types";

export const ColorModeContext = React.createContext();
export const ColorModeConsumer = ColorModeContext.Consumer;

function ColorModeProvider({ theme = "light", children }) {
  const [color, setColor] = useState(theme);

  const updateColor = newColor => {
    document.cookie = `theme=${newColor}; expires=Fri, 05 Jul 2999 23:10:25 GMT;`;
    setColor(newColor);
  };

  return (
    <ColorModeContext.Provider value={{ color, setColor: updateColor }}>
      {React.Children.only(children)}
    </ColorModeContext.Provider>
  );
}
ColorModeProvider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.element
};

export default ColorModeProvider;
