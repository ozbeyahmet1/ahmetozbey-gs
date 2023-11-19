// Checkbox.test.tsx

import { fireEvent, render } from "@testing-library/react";
import Checkbox from "./index";

describe("Checkbox component", () => {
  it("renders checkbox with label", () => {
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
    const checkbox = getByLabelText("Test Checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  it("calls onChange when checkbox is clicked", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={false} onChange={onChangeMock} />);
    const checkbox = getByLabelText("Test Checkbox");

    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it("displays checked checkbox", () => {
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={true} onChange={() => {}} />);
    const checkbox = getByLabelText("Test Checkbox");

    expect(checkbox).toBeChecked();
  });

  it("displays unchecked checkbox", () => {
    const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
    const checkbox = getByLabelText("Test Checkbox");

    expect(checkbox).not.toBeChecked();
  });
});
