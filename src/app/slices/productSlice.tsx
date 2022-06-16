import { createSlice } from '@reduxjs/toolkit';

import { AppDispatch } from '../store';

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
export const fetchProducts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(save([]));
    dispatch(startFetch());
    fetch('https://smallets-back.herokuapp.com/products')
      .then((response) => response.json())
      .then((products) => dispatch(save(products)));
  };
};

const productReducer = productsSlice.reducer;

export default productReducer;
