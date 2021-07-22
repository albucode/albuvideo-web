import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  videos: [],
  selectedVideoId: "",
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
  },
});

export const { loadVideos, loadVideoId } = videoSlice.actions;

export default videoSlice.reducer;
