import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { LogInPage } from "./LogInPage";
import userReducer from "../authentication/userSlice";
import errorAlertReducer from "../shared/errorAlertSlice";

const fakeRenderComponent = () => {
  const store = configureStore({
    reducer: {
      user: userReducer,
      errorAlert: errorAlertReducer,
    },
    preloadedState: {
      user: {
        email: "",
        emailInitial: "",
        isLoggedIn: false,
      },
      errorAlert: {
        errorMessage: "",
        displayErrorMessage: false,
      },
    },
  });

  const { container } = render(
    <Provider store={store}>
      <LogInPage />
    </Provider>
  );
  return { container };
};

describe("Renders LogInPage components", () => {
  beforeEach(() => {
    fakeRenderComponent();
  });

  it("renders header", () => {
    expect(screen.getByTestId("header")).toHaveTextContent(
      "Login To Your Account"
    );
  });

  it("renders email field", () => {
    expect(screen.getByTestId("email-field")).toHaveTextContent(
      "Email address"
    );
  });

  it("renders password field", () => {
    expect(screen.getByTestId("password-field")).toHaveTextContent("Password");
  });

  it("renders a login button", () => {
    expect(screen.getByTestId("login-button")).toHaveTextContent("Log In");
  });

  it("matches snapshot", () => {
    const { container } = fakeRenderComponent();
    expect(container).toMatchSnapshot();
  });
});
