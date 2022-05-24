import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  list: [],
  chosenDelivery: {
    deliveryPriceEuro: 0,
  },
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
    chosenDelivery: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        chosenDelivery: payload,
      };
    },
  },
});

export const { save, startFetch, chosenDelivery } = deliveriesSlice.actions;
export const fetchDeliveries = () => {
  return async (dispatch: any) => {
    dispatch(save([]));
    dispatch(startFetch());
    fetch('https://s-mallets-backend.vercel.app/delivery')
      .then((response) => response.json())
      .then((deliveries) => dispatch(save(deliveries)));
  };
};

const deliveryReducer = deliveriesSlice.reducer;

export default deliveryReducer;
