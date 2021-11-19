import React from "react";
import { render, screen } from "@testing-library/react";
import { TopBar } from "./TopBar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../authentication/userSlice";

const fakeRenderComponent = () => {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState: {
      user: {
        email: "test@test.com",
        emailInitial: "T",
        isLoggedIn: true,
      },
    },
  });

  const { container } = render(
    <Provider store={store}>
      <TopBar sectionName={"Test"} />
    </Provider>
  );
  return { container };
};

describe("TopBar", () => {
  it("displays section name", async () => {
    fakeRenderComponent();
    expect(screen.getByTestId("section-name")).toHaveTextContent("Test");
  });

  it("displays email initial", async () => {
    fakeRenderComponent();
    expect(screen.getByTestId("email-initial")).toHaveTextContent("T");
  });

  it("matches snapshot", () => {
    const { container } = fakeRenderComponent();
    expect(container).toMatchSnapshot();
  });
});
