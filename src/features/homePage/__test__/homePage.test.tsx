//import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';

import HomePage from '../HomePage';

test('home page should has header elements', () => {
  render(<HomePage />);

  expect(screen.getAllByRole('heading', {}).length).toBeGreaterThanOrEqual(1);
});

test('home page has enabled button for submit form', async () => {
  render(<HomePage />);

  expect(await screen.findByRole('button', { name: 'send' })).toBeEnabled();
});

test(`contact form should send message when email and text are added`, () => {
  render(<HomePage />);
  const emailInput = screen.getByPlaceholderText('Email');
  expect(emailInput).toBeDefined();
  // userEvent.type(emailInput, 'matylda@wp.pl');

  // expect(emailInput).toHaveValue('matylda@wp.pl');
  screen.debug();
});
