import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../features/loginPage/authSlice';
import { deliDataSlice } from '../features/deliveryPage/deliveryDataSlice';
import { userSlice } from '../features/userPage/userSlice';
import { userWithOrdersSlice } from './userWithOrdersSlice';

const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    user: userSlice.reducer,
    deliveryData: deliDataSlice.reducer,
    userWithOrders: userWithOrdersSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
