import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component', () => {
    render(<Card />);

    expect(screen.getByTestId("pokemon-image")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-name")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-specifics")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-abilities")).toBeInTheDocument();
  });
  