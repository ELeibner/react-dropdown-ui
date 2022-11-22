import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render component', () => {
    render(<Home />);
    const home = screen.getByTestId('home');
    expect(home).toBeInTheDocument();
  });
});
