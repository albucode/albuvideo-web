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

export const TimesWatchedChart = () => {
  const data = useSelector(
    (state) => state.video.videoStats.times_watched_data
  );

  return (
    <VictoryChart
      height={300}
      width={900}
      containerComponent={<VictoryContainer responsive={false} />}
    >
      <VictoryLegend
        x={790}
        y={0}
        data={[{ name: "seconds", symbol: { fill: theme.colors.blue } }]}
      />
      <VictoryLabel text="Times watched" x={50} y={10} textAnchor="middle" />
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
        y="count"
        x="period"
        style={{ data: { fill: theme.colors.blue, width: 15 } }}
        labels={({ datum }) =>
          `Times watched: ${datum.count}  \n ${datum.period}`
        }
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
};
