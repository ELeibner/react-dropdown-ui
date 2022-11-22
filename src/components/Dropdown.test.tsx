import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../components/Dropdown';
import { dropdownMockData } from '../data/dropdown';

describe('Dropdown component tests', () => {
  beforeEach(() => {
    render(<Dropdown {...dropdownMockData} />);
  });

  it('should render elements', async () => {
    const container = screen.getByTestId('dropdown');
    expect(container).toBeInTheDocument();

    const button = container.getElementsByClassName('dropdown-button')[0];
    expect(button).toBeInTheDocument();

    const icon = container.getElementsByClassName('icon-container')[0];
    expect(icon).toBeInTheDocument();

    await userEvent.click(button);

    const menu = container.getElementsByClassName('dropdown-menu-container')[0];
    expect(menu).toBeInTheDocument();

    const menuItems = container.getElementsByClassName('dropdown-menu-item');
    expect(menuItems).toHaveLength(4);
  });
});
