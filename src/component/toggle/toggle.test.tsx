// Toggle.test.tsx

import { fireEvent, render } from "@testing-library/react";
import { Toggle, ToggleProps } from "./index";

describe("Toggle component", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderToggle = (props: Partial<ToggleProps> = {}) => {
    const defaultProps: ToggleProps = {
      value: false,
      onChange: mockOnChange,
    };

    const { value, onChange, ...rest } = { ...defaultProps, ...props };

    return render(<Toggle value={value} onChange={onChange} {...rest} />);
  };

  it("renders the Toggle component with default props", () => {
    const { container } = renderToggle();
    const toggleContainer = container.querySelector(".toggle_container") as Element;

    expect(toggleContainer).toBeInTheDocument();
  });

  it("renders the Toggle component in checked state", () => {
    const { container } = renderToggle({ value: true });
    const toggleContainer = container.querySelector(".toggle_container.checked") as Element;

    expect(toggleContainer).toBeInTheDocument();
  });

  it("calls onChange when clicked", () => {
    const { container } = renderToggle();
    const toggleContainer = container.querySelector(".toggle_container") as Element;

    fireEvent.click(toggleContainer);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("renders the Toggle component with additional props", () => {
    const { container } = renderToggle({ "data-testid": "custom-id" });
    const toggleContainer = container.querySelector(".toggle_container") as Element;

    expect(toggleContainer).toHaveAttribute("data-testid", "custom-id");
  });
});
