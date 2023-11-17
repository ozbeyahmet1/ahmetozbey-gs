import '@testing-library/jest-dom/extend-expect'; // For extending Jest expect functionalities
import { fireEvent, render } from '@testing-library/react';
import { Toggle } from './index'; // Assuming the Toggle component is in the same directory as this test file

describe('Toggle component', () => {
  it('renders with default value', () => {
    const { getByTestId } = render(<Toggle data-testid="toggle-component" />);
    const toggleComponent = getByTestId('toggle-component');

    expect(toggleComponent).toBeInTheDocument();
  });

  it('renders with a specified value', () => {
    const { getByTestId } = render(<Toggle data-testid="toggle-component" value={true} />);
    const toggleComponent = getByTestId('toggle-component');

    expect(toggleComponent).toHaveClass('checked');
  });

  it('toggles the value on click', () => {
    const { getByTestId } = render(<Toggle data-testid="toggle-component" />);
    const toggleComponent = getByTestId('toggle-component');

    fireEvent.click(toggleComponent);

    expect(toggleComponent).toHaveClass('checked');
  });
});
