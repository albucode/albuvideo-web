import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  videos: [],
  selectedVideo: {},
};

export const videoSlice = createSlice({
  name: "video",
  initialState: INITIAL_STATE,
  reducers: {
    loadVideos: (state, action) => ({
      ...state,
      videos: action.payload.videos,
    }),
    loadSelectedVideo: (state, action) => ({
      ...state,
      selectedVideo: action.payload.video,
    }),
  },
});

export const { loadVideos, loadSelectedVideo } = videoSlice.actions;

export default videoSlice.reducer;
