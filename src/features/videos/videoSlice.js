import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  videos: [],
  selectedVideoId: "",
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
    loadVideoId: (state, action) => ({
      ...state,
      selectedVideoId: action.payload,
    }),
    loadSelectedVideo: (state, action) => ({
      ...state,
      selectedVideo: action.payload.video,
    }),
  },
});

export const { loadVideos, loadVideoId, loadSelectedVideo } =
  videoSlice.actions;

export default videoSlice.reducer;
