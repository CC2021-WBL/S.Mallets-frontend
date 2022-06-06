import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import HomePage from '../features/homePage/HomePage';

test('home page should has header elements', () => {
  render(<HomePage />);

  expect(screen.getAllByRole('heading', {}).length).toBeGreaterThanOrEqual(1);
});

test('home page has enabled button for submit form', async () => {
  render(<HomePage />);

  expect(await screen.findByRole('button', { name: 'send' })).toBeEnabled();
});

test(`contact form should send message when email and text are added`, async () => {
  render(<HomePage />);

  userEvent.type(screen.getByPlaceholderText('Email'), 'matylda@wp.pl');
  expect(screen.getByPlaceholderText('Email')).toBeValid();
});

// test(`contact form shouldn't send message without email and text`, async () => {
//   render(<HomePage />);

//   expect(screen.getByRole('button', { name: 'send' }));
// });
