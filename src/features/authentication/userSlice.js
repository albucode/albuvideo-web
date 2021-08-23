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
      email: action.payload.user?.email || "",
      isLoggedIn: !!action.payload.user?.email,
      emailInitial: action.payload.user?.email[0].toUpperCase(),
    }),
    logOutUser: (state) => ({
    ...INITIAL_STATE,
    }),
  },
});

export const { loadUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
