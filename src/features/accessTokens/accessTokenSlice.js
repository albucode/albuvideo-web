import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  accessTokens: [],
};

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: INITIAL_STATE,
  reducers: {
    loadAccessTokens: (state, action) => ({
      ...state,
      accessTokens: action.payload.access_tokens,
    }),
  },
});

export const { loadAccessTokens } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
