/* eslint-disable import/named */

import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../features/loginPage/authSlice';
import { userSlice } from '../features/loginPage/userSlice';

const store = configureStore({
  reducer: { authentication: authSlice.reducer, user: userSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
