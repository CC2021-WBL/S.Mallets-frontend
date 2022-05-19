import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/slices/product-slice';
import cartReducer from '../features/slices/cart-slice';
import uiReducer from '../features/slices/ui-slice';
import deliveryReducer from '../features/slices/delivery-slice';

const Store = configureStore({
  reducer: {
    products: productReducer,
    deliveries: deliveryReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
