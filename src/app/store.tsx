import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import deliveryReducer from './slices/deliverySlice';
import orderReducer from './slices/orderSlice';
import productReducer from './slices/productSlice';
import authReducer from './slices/authSlice';
import deliDataReducer from './slices/deliveryDataSlice';
import userReducer from './slices/userSlice';
import userWithOrderReducer from './slices/userWithOrdersSlice';

const store = configureStore({
  reducer: {
    authentication: authReducer,
    user: userReducer,
    products: productReducer,
    deliveries: deliveryReducer,
    cart: cartReducer,
    deliveryData: deliDataReducer,
    userWithOrders: userWithOrderReducer,
    order: orderReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
