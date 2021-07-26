import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryLegend,
} from "victory";
import theme from "../../theme/theme";

export const TimeStreamedChart = () => {
  const data = [
    { hour: 1, time_streamed: 130 },
    { hour: 2, time_streamed: 1425 },
    { hour: 3, time_streamed: 1900 },
    { hour: 4, time_streamed: 130 },
    { hour: 5, time_streamed: 165 },
    { hour: 6, time_streamed: 1425 },
    { hour: 7, time_streamed: 1900 },
    { hour: 8, time_streamed: 130 },
    { hour: 9, time_streamed: 165 },
    { hour: 10, time_streamed: 1425 },
    { hour: 11, time_streamed: 1900 },
    { hour: 12, time_streamed: 1900 },
    { hour: 13, time_streamed: 130 },
    { hour: 14, time_streamed: 1425 },
    { hour: 15, time_streamed: 1900 },
    { hour: 16, time_streamed: 130 },
    { hour: 17, time_streamed: 165 },
    { hour: 18, time_streamed: 1425 },
    { hour: 19, time_streamed: 1900 },
    { hour: 20, time_streamed: 130 },
    { hour: 21, time_streamed: 165 },
    { hour: 22, time_streamed: 1425 },
    { hour: 23, time_streamed: 1900 },
    { hour: 24, time_streamed: 1900 },
  ];

  return (
    <VictoryChart domainPadding={{ x: 8 }} theme={VictoryTheme.material}>
      <VictoryLegend
        x={240}
        y={0}
        orientation="horizontal"
        gutter={20}
        style={{ title: { fontSize: 20 } }}
        data={[{ name: "hours", symbol: { fill: theme.colors.cyan } }]}
      />

      <VictoryLabel text="Time streamed" x={50} y={10} textAnchor="middle" />
      <VictoryAxis
        tickValues={[1, 8, 16, 24]}
        tickFormat={["1am", "8am", "4pm", "12am"]}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={[100, 500, 1000, 1500, 2000, 2500]}
      />
      <VictoryBar
        data={data}
        x="hour"
        y="time_streamed"
        style={{ data: { fill: theme.colors.cyan, width: 6 } }}
      />
    </VictoryChart>
  );
};
