import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  email: "",
  emailInitial: "",
  isLoggedIn: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loadUser: (state, action) => ({
      ...state,
      emailInitial: action.payload.user?.email[0].toUpperCase(),
      email: action.payload.user?.email || "",
      isLoggedIn: !!action.payload.user?.email,
    }),
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
