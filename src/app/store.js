import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/authentication/userSlice";
import errorAlertReducer from "../features/shared/errorAlertSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    errorAlert: errorAlertReducer,
  },
});
