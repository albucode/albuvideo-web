import React from "react";
import { VictoryBar, VictoryChart } from "victory";

export const TimeStreamedChart = () => {
  const data = [
    { hour: 1, time_streamed: 130 },
    { hour: 2, time_streamed: 165 },
    { hour: 3, time_streamed: 1425 },
    { hour: 4, time_streamed: 1900 },
  ];

  return (
    <VictoryChart>
      <VictoryBar data={data} x="hour" y="time_streamed" />
    </VictoryChart>
  );
};
