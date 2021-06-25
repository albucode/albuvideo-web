import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  videos: [],
};

export const videoSlice = createSlice({
  name: "video",
  initialState: INITIAL_STATE,
  reducers: {
    loadVideos: (state, action) => ({
      ...state,
      videos: action.payload.videos,
    }),
  },
});

export const { loadVideos } = videoSlice.actions;

export default videoSlice.reducer;
