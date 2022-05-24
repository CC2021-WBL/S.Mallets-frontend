import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cartPage/cartSlice';
import deliveryReducer from '../features/deliveryPage/deliverySlice';
import productReducer from '../features/products/productSlice';
import uiReducer from '../tools/uiSlice';
import { authSlice } from '../features/loginPage/authSlice';
import { deliDataSlice } from '../features/deliveryPage/deliveryDataSlice';
import { userSlice } from '../features/userPage/userSlice';

const store = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    user: userSlice.reducer,
    products: productReducer,
    deliveries: deliveryReducer,
    cart: cartReducer,
    ui: uiReducer,
    deliveryData: deliDataSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
