import React from "react";
import { useSelector } from "react-redux";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
  VictoryTooltip,
  VictoryContainer,
} from "victory";

import theme from "../../theme/theme";

export const TimeStreamedChart = () => {
  const data = useSelector((state) => state.video.videoStats);

  return (
    <VictoryChart height={300} width={1000} containerComponent={<VictoryContainer responsive={false}/>} >
      <VictoryLegend
        x={875}
        y={0}
        data={[{ name: "seconds", symbol: { fill: theme.colors.cyan } }]}
      />
      <VictoryLabel text="Time streamed" x={50} y={10} textAnchor="middle" />
      <VictoryAxis
        style={{
          grid: { stroke: theme.colors.grey2, strokeWidth: 0.5 },
          tickLabels: { fill: "none" },
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          grid: { stroke: theme.colors.grey2, strokeWidth: 0.9 },
          tickLabels: { fontSize: "10" },
        }}
      />
      <VictoryBar
        data={data}
        y="sum"
        x="period"
        style={{ data: { fill: theme.colors.cyan, width: 15 } }}
        labels={({ datum }) =>
          `Time streamed: ${datum.sum}  \n ${datum.period}`
        }
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
};
