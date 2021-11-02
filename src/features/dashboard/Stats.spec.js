import React from "react";
import { render, screen } from "@testing-library/react";
import { Stats } from "./Stats";
import Users from "../shared/icons/Users";
import theme from "../../theme/theme";

describe("Stats", () => {
  it("displays title", async () => {
    render(
      <Stats
        title={"Total streamed"}
        data={"0h 1"}
        icon={<Users />}
        inputColor={theme.colors.cyan}
      />
    );
    expect(screen.getByTestId("title")).toHaveStyle(
      "font-weight: 400; color: #98A1B0; font-size: 18px"
    );
    expect(screen.getByTestId("title")).toHaveTextContent("Total streamed");
  });
});
