import { render, screen } from "@testing-library/react-native";
import { Input } from ".";

describe("Component: <Input />", () => {
  it("should render the component", () => {
    render(<Input />);
    const input = screen.getByTestId("input");

    expect(input).toBeTruthy();
  });

  it("should render the component with indicator", () => {
    render(<Input isLoading />);
    const loadIndicator = screen.getByTestId("activity-indicator");

    expect(loadIndicator).toBeTruthy();
  });

  it("should not render the component indicator when isLoading is not defined", () => {
    render(<Input />);
    const loadIndicator = screen.queryByTestId("activity-indicator");

    expect(loadIndicator).toBeNull();
  });
});
