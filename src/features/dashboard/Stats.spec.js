import React from "react";
import { render, screen } from "@testing-library/react";
import { Stats } from "./Stats";
import Users from "../shared/icons/Users";
import theme from "../../theme/theme";

describe("Stats", () => {
  beforeEach(() => {
    render(
      <Stats
        title={"Total streamed"}
        data={"0h 1"}
        icon={<Users />}
        inputColor={theme.colors.cyan}
      />
    );
  });

  it("displays Title", async () => {
    expect(screen.getByTestId("title")).toHaveTextContent("Total streamed");
  });

  it("displays Data", async () => {
    expect(screen.getByTestId("data")).toHaveTextContent("0h 1");
  });

  it("displays IconTag", async () => {
    expect(screen.getByTestId("square-icon")).toHaveStyle(
      "background-color: #00CFFD"
    );
  });
});
