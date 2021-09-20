import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  topics: [],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState: INITIAL_STATE,
  reducers: {
    loadOptions: (state, action) => ({
      ...state,
      topics: action.payload.topics,
    }),
  },
});

export const { loadOptions } = optionsSlice.actions;

export default optionsSlice.reducer;
