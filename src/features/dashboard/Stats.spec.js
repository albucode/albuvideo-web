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

  it("displays title", async () => {
    expect(screen.getByTestId("title")).toHaveStyle(
      "font-weight: 400; color: #98A1B0; font-size: 18px"
    );
    expect(screen.getByTestId("title")).toHaveTextContent("Total streamed");
  });

  it("displays data", async () => {
    expect(screen.getByTestId("data")).toHaveStyle(
      "color: #222222; font-weight: 700; font-size: 36px;"
    );
    expect(screen.getByTestId("data")).toHaveTextContent("0h 1");
  });
});
