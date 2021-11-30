import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { LogInPage } from "./LogInPage";
import userReducer from "../authentication/userSlice";
import errorAlertReducer from "../shared/errorAlertSlice";
import { server } from "../../mocks/server";

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

describe("Form behaviour", () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("renders error message", async () => {
    // await act (async () => {
    //   fireEvent.change(screen.getByTestId("email-field"), {
    //     target: {email: ''},
    //   });
    //
    //   fireEvent.change(screen.getByTestId("password-field"), {
    //     target: {password: ''},
    //   });
    // });

    fakeRenderComponent();
    fireEvent.submit(screen.getByTestId("form"));
    expect(
      await screen.findByText(
        /You need to sign in or sign up before continuing/i
      )
    ).toBeInTheDocument();
  });

  // it('should submit when form inputs contain text', async () => {
  //   const { getByTestId, queryByText } = render(<Login/>)
  //
  //   await act(async () => {
  //     fireEvent.change(screen.getByLabelText(/username/i), {
  //       target: {value: 'shaquille'},
  //     });
  //
  //     fireEvent.change(screen.getByLabelText(/password/i), {
  //       target: {value: 'oatmeal'},
  //     })
  //   });
  //
  //   await act (async () => {
  //     fireEvent.submit(getByTestId('form'))
  //   });
  //
  //   expect(queryByText("User Name is required")).not.toBeInTheDocument();
  //   expect(queryByText("Password is required")).not.toBeInTheDocument();
  // });
});
