import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/authentication/userSlice";
import errorAlertReducer from "../features/shared/errorAlertSlice";
import videoReducer from "../features/videos/videoSlice";
import accessTokenSlice from "../features/accessTokens/accessTokenSlice";
import signatureKeySlice from "../features/signatureKeys/signatureKeysSlice";
import webhookSubscriptionsSlice from "../features/webhookSubscriptions/webhookSubscriptionsSlice";
import dashboardSlice from "../features/dashboard/dashboardSlice";
import optionsSlice from "../features/options/optionsSlice";
import invoiceSlice from "../features/invoices/invoiceSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    errorAlert: errorAlertReducer,
    video: videoReducer,
    accessToken: accessTokenSlice,
    signatureKey: signatureKeySlice,
    webhookSubscription: webhookSubscriptionsSlice,
    dashboard: dashboardSlice,
    options: optionsSlice,
    invoices: invoiceSlice,
  },
});
