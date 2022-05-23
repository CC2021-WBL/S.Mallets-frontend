import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../features/loginPage/authSlice';
import { deliDataSlice } from '../features/deliveryPage/deliveryDataSlice';
import { userSlice } from '../features/userPage/userSlice';

const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    user: userSlice.reducer,
    deliveryData: deliDataSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
