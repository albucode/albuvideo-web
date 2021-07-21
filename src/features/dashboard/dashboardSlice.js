import { createSlice } from "@reduxjs/toolkit";
import formatToHours from "../../utils/formatToHours";

const INITIAL_STATE = {
  timeStreamed: 0,
  timeStored: 0,
  timeStreamedLast24h: 0,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: INITIAL_STATE,
  reducers: {
    loadtimeStreamed: (state, action) => ({
      ...state,
      timeStreamed: formatToHours(action.payload.stats.time_streamed),
      timeStored: formatToHours(action.payload.stats.time_stored),
      timeStreamedLast24h: formatToHours(
        action.payload.stats.time_streamed_last_24h
      ),
    }),
  },
});

export const { loadtimeStreamed } = dashboardSlice.actions;

export default dashboardSlice.reducer;
