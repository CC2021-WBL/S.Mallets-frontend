/* eslint-disable import/named */

import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './authSlice';

const store = configureStore({
  reducer: { authentication: authSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
