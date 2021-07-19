import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  webhooksSubscriptions: [],
};

export const webhookSubscriptionsSlice = createSlice({
  name: "webhookSubscription",
  initialState: INITIAL_STATE,
  reducers: {
    loadWebhookSubscriptions: (state, action) => ({
      ...state,
      webhookSubscriptions: action.payload.webhook_subscriptions,
    }),
  },
});

export const { loadWebhookSubscriptions } = webhookSubscriptionsSlice.actions;

export default webhookSubscriptionsSlice.reducer;
