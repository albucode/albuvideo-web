import React from "react";
import { render, screen } from "@testing-library/react";
import { TopBar } from "./TopBar";
import * as redux from "react-redux";

describe("TopBar", () => {
  beforeEach(() => {
    render(<TopBar sectionName={"Test"} />);

    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({ emailInitial: "T" });
  });

  it("displays section name", async () => {
    expect(screen.getByTestId("section-name")).toHaveTextContent("Test");
  });
});
