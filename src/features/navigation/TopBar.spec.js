import React from "react";
import { render, screen } from "@testing-library/react";
import { TopBar } from "./TopBar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../authentication/userSlice";

describe("TopBar", () => {
  beforeEach(() => {
    const store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          email: "a@a.com",
          emailInitial: "A",
          isLoggedIn: true,
        },
      },
    });

    render(
      <Provider store={store}>
        <TopBar sectionName={"Test"} />
      </Provider>
    );
  });

  it("displays section name", async () => {
    expect(screen.getByTestId("section-name")).toHaveTextContent("Test");
  });

  it("displays section name styles", async () => {
    expect(screen.getByTestId("section-name")).toHaveStyle(
      "color: #222222; width: 345px; font-weight: 700; font-size: 36px; line-height: 49px;"
    );
  });

  it("displays email initial", async () => {
    expect(screen.getByTestId("email-initial")).toHaveTextContent("A");
  });
});
