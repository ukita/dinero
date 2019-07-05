import React from "react";
import { useSpring, animated } from "react-spring";

import {
  Sparkline,
  LineSeries,
  VerticalReferenceLine,
  PointSeries,
  WithTooltip,
  withParentSize
} from "@data-ui/sparkline";
import MoneyText from "@components/MoneyText";
import { Box } from "@components/Layout";

const AnimatedBox = animated(Box);

function WalletSparkline({ data = [], ...props }) {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

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
            data={[{ value: 0 }, ...data]}
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

export default withParentSize(WalletSparkline);
