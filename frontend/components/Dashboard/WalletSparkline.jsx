import React from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import {
  Sparkline,
  LineSeries,
  VerticalReferenceLine,
  PointSeries,
  WithTooltip,
  withTooltipPropTypes,
  withParentSize
} from "@data-ui/sparkline";
import MoneyText from "@components/MoneyText";
import { Box } from "@components/Layout";

const AnimatedBox = animated(Box);

function WalletSparkline({ data = [], ...props }) {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  let values = data;
  if (values.length) {
    values = [{ value: 0 }, ...data];
  }

  return (
    <AnimatedBox style={spring}>
      <WithTooltip
        renderTooltip={({ datum }) => <MoneyText amount={datum.value} />}
      >
        {({ onMouseMove, onMouseLeave, tooltipData }) => (
          <Sparkline
            ariaLabel="Wallet Balance Chart"
            height={100}
            width={props.parentWidth}
            data={values}
            valueAccessor={d => d.value}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            margin={{
              bottom: 0,
              top: 25,
              left: 0,
              right: 0
            }}
          >
            <LineSeries stroke={"var(--primary-color)"} strokeWidth={4} />

            {tooltipData && (
              <React.Fragment>
                <VerticalReferenceLine
                  key="ref-line"
                  strokeWidth={1}
                  reference={tooltipData.index}
                  stroke={"var(--primary-color)"}
                  strokeDasharray="4 4"
                />
                ,
                <PointSeries
                  key="ref-point"
                  points={[tooltipData.index]}
                  fill={"var(--primary-color)"}
                />
              </React.Fragment>
            )}
          </Sparkline>
        )}
      </WithTooltip>
    </AnimatedBox>
  );
}
WalletSparkline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      value: PropTypes.number
    })
  ),
  ...withTooltipPropTypes
};

export default withParentSize(WalletSparkline);
