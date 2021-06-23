import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  email: "",
  emailInitial: "",
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loadUser: (state, action) => ({
      ...state,
      email: action.payload.user?.email,
      emailInitial: action.payload.user?.email[0].toUpperCase(),
      isLoggedIn: action.payload.user?.email && true,
    }),
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
