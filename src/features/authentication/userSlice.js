import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loadUser: (state, action) => ({
      ...state,
      email: action.payload.user.email,
    }),
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
