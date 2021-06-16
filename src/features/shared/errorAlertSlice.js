import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  errorMessage: "",
  displayErrorMessage: false,
};

export const errorAlertSlice = createSlice({
  name: "errorAlert",
  initialState: INITIAL_STATE,
  reducers: {
    loadErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload,
    }),
    displayErrorAlert: (state) => ({
      ...state,
      displayErrorMessage: true
    }),
    hideErrorAlert: (state) => ({
      ...state,
      displayErrorMessage: false
    }),
  },
});

export const { loadErrorMessage, displayErrorAlert, hideErrorAlert } = errorAlertSlice.actions;

export default errorAlertSlice.reducer;
