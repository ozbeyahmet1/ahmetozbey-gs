import { fireEvent, render } from "@testing-library/react";
import Checkbox from "./index";

test("Checkbox renders correctly", () => {
  const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
  const checkboxInput = getByLabelText(/Test Checkbox/i);

  expect(checkboxInput).toBeInTheDocument();
  expect(checkboxInput).not.toBeChecked();
});

test("Checkbox changes state and calls onChange when clicked", () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(<Checkbox label="Test Checkbox" checked={false} onChange={onChangeMock} />);
  const checkboxInput = getByLabelText(/Test Checkbox/i);

  // Click the checkbox
  fireEvent.click(checkboxInput);

  // Expect the state to be changed
  expect(checkboxInput).toBeChecked();

  // Expect the onChange function to be called with the new state
  expect(onChangeMock).toHaveBeenCalledWith(true);
});

test("Checkbox updates state when props change", () => {
  const { getByLabelText, rerender } = render(<Checkbox label="Test Checkbox" checked={false} onChange={() => {}} />);
  const checkboxInput = getByLabelText(/Test Checkbox/i);

  // Check the checkbox
  fireEvent.click(checkboxInput);

  // Rerender the component with a new checked prop
  rerender(<Checkbox label="Test Checkbox" checked={true} onChange={() => {}} />);

  // Expect the checkbox to be checked due to the updated prop
  expect(checkboxInput).toBeChecked();
});
