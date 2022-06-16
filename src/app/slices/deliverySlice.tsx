import { createSlice } from '@reduxjs/toolkit';

export interface Delivery {
  id?: number;
  deliveryName?: string;
  deliveryArea?: string;
  deliveryPriceEuro?: string;
  createdAt?: string;
  modifiedAt?: string;
}

interface DeliveryInterface {
  loading: boolean;
  list: Delivery[];
  chosenDelivery: Delivery;
}

const initialState: DeliveryInterface = {
  loading: false,
  list: [],
  chosenDelivery: {},
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
    fetch('https://smallets-back.herokuapp.com/delivery')
      .then((response) => response.json())
      .then((deliveries) => dispatch(save(deliveries)));
  };
};

const deliveryReducer = deliveriesSlice.reducer;

export default deliveryReducer;
