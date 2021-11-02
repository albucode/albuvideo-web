import React from "react";
import { render, screen } from "@testing-library/react";
import { IconTag } from "./IconTag";
import Users from "./icons/Users";
import theme from "../../theme/theme";

describe("IconTag", () => {
  it("displays users icon ", async () => {
    render(<IconTag icon={<Users />} inputColor={theme.colors.blue} />);
    expect(screen.getByTestId("square-icon")).toBeInTheDocument();
    expect(screen.getByTestId("square-icon")).toHaveStyle(
      "background-color: rgb(50, 70, 210)"
    );
  });
});
