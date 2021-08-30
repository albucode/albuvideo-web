import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  videos: [],
  selectedVideo: {},
  videoStats: [],
  selectedCountriesIds: [],
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
    loadVideoStats: (state, action) => ({
      ...state,
      videoStats: action.payload,
    }),
    loadCountriesIds: (state, action) => ({
      ...state,
      selectedCountriesIds: action.payload.map(({ value }) => value),
    }),
  },
});

export const {
  loadVideos,
  loadSelectedVideo,
  loadVideoStats,
  loadCountriesIds,
} = videoSlice.actions;

export default videoSlice.reducer;
