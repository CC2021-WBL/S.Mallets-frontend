import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  list: [],
};

const deliveriesSlice = createSlice({
  name: 'deliveries',
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

export const { save, startFetch } = deliveriesSlice.actions;
export const fetchDeliveries = () => {
  return async (dispatch: any) => {
    dispatch(save([]));
    dispatch(startFetch());
    fetch('/api/deliveries')
      .then((response) => response.json())
      .then((deliveries) => dispatch(save(deliveries)));
  };
};

const deliveryReducer = deliveriesSlice.reducer;

export default deliveryReducer;
