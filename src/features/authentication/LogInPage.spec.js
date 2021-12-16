import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { LogInPage } from "./LogInPage";
import userReducer from "../authentication/userSlice";
import errorAlertReducer from "../shared/errorAlertSlice";
import { mockApiResponse } from "../../utils/tests/apiResponseMocks";

const fakeRenderComponent = () => {
  const history = createMemoryHistory({});

  const store = configureStore({
    reducer: {
      user: userReducer,
      errorAlert: errorAlertReducer,
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

describe("Form behaviour", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  const submitForm = async () => {
    await fakeRenderComponent();

    await act(async () => {
      fireEvent.submit(screen.getByTestId("form"));
    });
  };

  describe("when login fails", () => {
    it("renders error message prompting to sign in or up", async () => {
      mockApiResponse({
        error: "You need to sign in or sign up before continuing.",
      });

      await submitForm();

      expect(
        await screen.findByText(
          /You need to sign in or sign up before continuing/i
        )
      ).toBeInTheDocument();
    });

    it("renders error message pointing out invalid email or password", async () => {
      mockApiResponse({ error: "Invalid Email or password." });

      await submitForm();

      expect(
        await screen.findByText(/Invalid Email or password/i)
      ).toBeInTheDocument();
    });
  });

  describe("when login succeeds", () => {
    it("redirects to dashboard", async () => {
      mockApiResponse({ user: { email: "test@email.com" } });

      const { history } = await fakeRenderComponent();

      await act(async () => {
        fireEvent.submit(screen.getByTestId("form"));
      });

      expect(await history.location.pathname).toEqual("/dashboard");
    });
  });
});

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
