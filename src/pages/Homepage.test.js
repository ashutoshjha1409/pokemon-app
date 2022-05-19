import { render, screen } from '@testing-library/react';
import Homepage from "./Homepage";

test('renders Homepage components', () => {
    render(<Homepage />);

    expect(screen.getByTestId("page-heading")).toHaveTextContent('Pokémons');
    //expect(screen.getByTestId("available-limits")).toHaveDisplayValue("Select a breed");
    expect(screen.getByTestId("card-list-container")).toBeInTheDocument();
    expect(screen.getByTestId("pagination-buttons-top")).toBeInTheDocument();
    expect(screen.getByTestId("pagination-buttons-bottom")).toBeInTheDocument();
  });
  