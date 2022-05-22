import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cartPage/slices/cartSlice';
import deliveryReducer from '../features/cartPage/slices/deliverySlice';
import productReducer from '../features/cartPage/slices/productSlice';
import uiReducer from '../features/cartPage/slices/uiSlice';
import { authSlice } from '../features/loginPage/authSlice';
import { userSlice } from '../features/loginPage/userSlice';

const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    user: userSlice.reducer,
    products: productReducer,
    deliveries: deliveryReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
