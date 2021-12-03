import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { LogInPage } from "./LogInPage";
import userReducer from "../authentication/userSlice";
import errorAlertReducer from "../shared/errorAlertSlice";

const fakeRenderComponent = () => {
  const history = createMemoryHistory({});

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
      <Router history={history}>
        <LogInPage />
      </Router>
    </Provider>
  );
  return { container, history };
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

describe("Form behaviour", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("redirects to dashboard", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ user: { email: "test@email.com" } })
    );
    const { history } = await fakeRenderComponent();

    await act(async () => {
      fireEvent.submit(screen.getByTestId("form"));
    });

    expect(await history.location.pathname).toEqual("/dashboard");
  });
});
