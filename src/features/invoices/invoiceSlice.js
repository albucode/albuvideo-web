import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  invoices: [],
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: INITIAL_STATE,
  reducers: {
    loadInvoices: (state, action) => ({
      ...state,
      invoices: action.payload.invoices,
    }),
  },
});

export const { loadInvoices } = invoiceSlice.actions;

export default invoiceSlice.reducer;
