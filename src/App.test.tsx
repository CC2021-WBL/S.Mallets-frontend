import { render, screen } from '@testing-library/react';

import App from './App';

test('shows App compoents', () => {
  render(<App />);
  //const { getByText } = render(<App />);

  screen.debug();

  //expect(getByText(/learn/i)).toBeInTheDocument();
});
