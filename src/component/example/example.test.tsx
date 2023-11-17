import "@testing-library/jest-dom/extend-expect"; // for extra matchers
import { fireEvent, render } from "@testing-library/react";

import { Button } from "./example"; // Adjust the import path based on your project structure

describe("Button component", () => {
  it("renders with the correct label", () => {
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);

    fireEvent.click(getByText("Click me"));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed based on your requirements
});
