import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupServer } from "msw/node";
import { rest } from "msw";
import {createMemoryHistory} from "history";
import { Router } from "react-router-dom"

import { LogInPage } from "./LogInPage";
import userReducer from "../authentication/userSlice";
import errorAlertReducer from "../shared/errorAlertSlice";
import { server } from "../../mocks/server";
import { baseUrl } from "../../config";

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
      <Router history={history} >
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
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("renders error message prompting to sign in or up", async () => {
    fakeRenderComponent();
    fireEvent.submit(screen.getByTestId("form"));
    expect(
      await screen.findByText(
        /You need to sign in or sign up before continuing/i
      )
    ).toBeInTheDocument();
  });

  it("renders error message pointing out invalid email or password", async () => {
    const server = setupServer(
      rest.post(`${baseUrl}/users/sign_in`, (req, res, ctx) => {
        return res(ctx.json({ error: "Invalid Email or password." }));
      })
    );

    server.listen();

    fakeRenderComponent();

    await act(async () => {
      fireEvent.submit(screen.getByTestId("form"));
    });

    expect(
      await screen.findByText(/Invalid Email or password/i)
    ).toBeInTheDocument();

    server.close();
  });

  it("redirects to dashboard", async () => {
    const server = setupServer(
      rest.post(`${baseUrl}/users/sign_in`, (req, res, ctx) => {
        return res(ctx.json({ user:{email: "test@email.com"} }));
      })
    );

    server.listen();

    const { history } = await fakeRenderComponent();

    await act(async () => {
      fireEvent.submit(screen.getByTestId("form"));
    });

    expect(history.location.pathname).to.eq("/dashboard");

    server.close();
  });
});
