import React from "react";
import { render, screen } from "@testing-library/react";
import { Stats } from "./Stats";
import Users from "../shared/icons/Users";
import theme from "../../theme/theme";

const fakeRenderComponent = () => {
  const { container } = render(
    <Stats
      title={"Total streamed"}
      data={"0h 1"}
      icon={<Users />}
      inputColor={theme.colors.cyan}
    />
  );
  return { container };
};

describe("Stats", () => {
  beforeEach(() => {
    fakeRenderComponent();
  });

  it("displays Title", () => {
    expect(screen.getByTestId("title")).toHaveTextContent("Total streamed");
  });

  it("displays Data", () => {
    expect(screen.getByTestId("data")).toHaveTextContent("0h 1");
  });

  it("displays IconTag", () => {
    expect(screen.getByTestId("square-icon")).toHaveStyle(
      "background-color: #00CFFD"
    );
  });

  it("matches snapshot", () => {
    const { container } = fakeRenderComponent();
    expect(container).toMatchSnapshot();
  });
});
