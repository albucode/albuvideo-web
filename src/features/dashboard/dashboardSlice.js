import { createSlice } from "@reduxjs/toolkit";

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
      timeStreamed: action.payload.stats.time_streamed,
      timeStored: action.payload.stats.time_stored,
      timeStreamedLast24h: action.payload.stats.time_streamed_last_24h,
    }),
  },
});

export const { loadtimeStreamed } = dashboardSlice.actions;

export default dashboardSlice.reducer;
