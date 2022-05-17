import _products from '../../mock-data/products';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  list: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startFetch: (state) => {
      state.loading = true;
    },
    save: (state, action) => {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    },
  },
});

export const { save, startFetch } = productsSlice.actions;
export const fetchAsyncProducts = () => {
  return async (dispatch: any) => {
    dispatch(save([]));
    dispatch(startFetch());

    const products = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(_products);
      }, 1000);
    });
    dispatch(save(products));
  };
};

const productReducer = productsSlice.reducer;

export default productReducer;
