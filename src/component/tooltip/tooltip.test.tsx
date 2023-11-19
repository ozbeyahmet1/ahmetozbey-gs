// Tooltip.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { Dispatch, SetStateAction } from "react";
import Tooltip from "./index";

// Mocking next/link since we are not testing its functionality
jest.mock(
  "next/link",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children,
);

describe("Tooltip component", () => {
  test("renders tooltip content", () => {
    const showTooltipMock: Dispatch<SetStateAction<boolean>> = jest.fn();

    render(<Tooltip showTooltip={showTooltipMock} />);

    // Check if the tooltip text is rendered
    expect(screen.getByText(/This widget links directly to your public profile/i)).toBeInTheDocument();

    // Check if the "View Public Profile" button is rendered
    expect(screen.getByText(/View Public Profile/i)).toBeInTheDocument();
  });

  test("calls showTooltip(false) on mouse leave", () => {
    const showTooltipMock: Dispatch<SetStateAction<boolean>> = jest.fn();

    render(<Tooltip showTooltip={showTooltipMock} />);

    // Trigger mouse leave event on the tooltip container
    fireEvent.mouseLeave(screen.getByTestId("tooltip-container"));

    // Check if showTooltip(false) was called
    expect(showTooltipMock).toHaveBeenCalledWith(false);
  });
});
