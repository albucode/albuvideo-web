import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  signatureKeys: [],
};

export const signatureKeySlice = createSlice({
  name: "signatureKey",
  initialState: INITIAL_STATE,
  reducers: {
    loadSignatureKeys: (state, action) => ({
      ...state,
      signatureKeys: action.payload.signature_keys,
    }),
  },
});

export const { loadSignatureKeys } = signatureKeySlice.actions;

export default signatureKeySlice.reducer;
