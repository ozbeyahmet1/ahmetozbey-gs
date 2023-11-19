// ColorBadge.test.tsx

import { fireEvent, render } from "@testing-library/react";
import { colorConverter } from "../../helpers/colorConverter";
import { Color } from "../../types";
import ColorBadge from "./index";

jest.mock("../../helpers/colorConverter", () => ({
  colorConverter: jest.fn((color: Color) => color),
}));

describe("ColorBadge component", () => {
  const mockColor: Color = "blue";
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders ColorBadge with correct background color", () => {
    const { getByTestId } = render(<ColorBadge isSelected={false} background={mockColor} onChange={mockOnChange} />);
    const colorBadge = getByTestId("colorBadge");

    expect(colorBadge).toHaveStyle(`background: ${colorConverter(mockColor)}`);
  });

  it("applies border when isSelected is true", () => {
    const { getByTestId } = render(<ColorBadge isSelected={true} background={mockColor} onChange={mockOnChange} />);
    const colorBadge = getByTestId("colorBadge");

    expect(colorBadge).toHaveStyle("border: 2px solid grey");
  });

  it("does not apply border when isSelected is false", () => {
    const { getByTestId } = render(<ColorBadge isSelected={false} background={mockColor} onChange={mockOnChange} />);
    const colorBadge = getByTestId("colorBadge");

    expect(colorBadge).not.toHaveStyle("border: 2px solid grey");
  });

  it("calls onChange with correct color when clicked", () => {
    const { getByTestId } = render(<ColorBadge isSelected={false} background={mockColor} onChange={mockOnChange} />);
    const colorBadge = getByTestId("colorBadge");

    fireEvent.click(colorBadge);

    expect(mockOnChange).toHaveBeenCalledWith(mockColor);
  });

  it("calls colorConverter with correct color", () => {
    render(<ColorBadge isSelected={false} background={mockColor} onChange={mockOnChange} />);

    expect(colorConverter).toHaveBeenCalledWith(mockColor);
  });
});
