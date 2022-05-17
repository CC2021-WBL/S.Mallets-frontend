import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/slices/product-slice';
import cartReducer from '../features/slices/cart-slice';
import uiReducer from '../features/slices/ui-slice';

const Store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    ui: uiReducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
