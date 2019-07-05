import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

import { Text } from "@components/Typography";

const AnimatedText = animated(Text);

const Formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD"
});

function MoneyText({ amount = 0, ...props }) {
  const spring = useSpring({
    amount: amount / 100,
    from: { amount: 0 }
  });

  return (
    <AnimatedText {...props}>
      {spring.amount.interpolate(n => Formatter.format(n))}
    </AnimatedText>
  );
}
MoneyText.propTypes = {
  amount: PropTypes.number
};

export default MoneyText;
