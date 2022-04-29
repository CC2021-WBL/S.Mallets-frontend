import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';
import { store } from './app/store';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
