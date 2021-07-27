import React from "react";
import { useSelector } from "react-redux";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
  VictoryTooltip,
} from "victory";

import theme from "../../theme/theme";

export const TimeStreamedChart = () => {
  const data = useSelector((state) => state.video.videoStats);

  return (
    <VictoryChart domainPadding={{ x: 8 }}>
      <VictoryLegend
        x={330}
        y={0}
        data={[{ name: "seconds", symbol: { fill: theme.colors.cyan } }]}
      />
      <VictoryLabel text="Time streamed" x={50} y={10} textAnchor="middle" />
      <VictoryAxis
        // tickValues={[1, 8, 16, 24]}
        // tickFormat={["1am", "8am", "4pm", "12am"]}
        style={{
          grid: { stroke: theme.colors.grey2, strokeWidth: 0.5 },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={[100000, 50000, 100000]}
        style={{
          grid: { stroke: theme.colors.grey2, strokeWidth: 0.9 },
        }}
      />
      <VictoryBar
        data={data}
        y="sum"
        x="period"
        style={{ data: { fill: theme.colors.cyan, width: 6 } }}
        labels={({ datum }) =>
          `Time streamed: ${datum.sum}  \n Hour:${datum.period}`
        }
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
};
