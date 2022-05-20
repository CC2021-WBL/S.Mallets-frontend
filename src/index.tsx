import './index.css';
import './i18n';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-toolkit-persist';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';

import App from './App';
import store, { persistConfig } from './app/store/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistConfig={persistConfig}>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
