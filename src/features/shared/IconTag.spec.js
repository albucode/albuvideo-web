import React from "react";
import { render, screen } from "@testing-library/react";
import { IconTag } from "./IconTag";
import Users from "./icons/Users";
import theme from "../../theme/theme";

const fakeRenderComponent = () => {
  const { container } = render(
    <IconTag icon={<Users />} inputColor={theme.colors.blue} />
  );
  return { container };
};

describe("IconTag", () => {
  it("displays users icon ", () => {
    fakeRenderComponent();
    expect(screen.getByTestId("square-icon")).toHaveStyle(
      "background-color: rgb(50, 70, 210)"
    );
  });

  it("matches snapshot", () => {
    const container = fakeRenderComponent();
    expect(container).toMatchSnapshot();
  });
});
