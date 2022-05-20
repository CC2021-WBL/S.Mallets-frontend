/* eslint-disable import/named */

import { PersistConfig, loadState } from 'redux-toolkit-persist';
import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './authSlice';

export const persistConfig: PersistConfig = {
  version: 1,
};
const store = configureStore({
  reducer: { auth: authSlice.reducer },
  preloadedState: loadState(persistConfig),
});

export default store;
