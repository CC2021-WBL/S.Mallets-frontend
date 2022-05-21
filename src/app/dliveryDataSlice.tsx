import { createSlice } from '@reduxjs/toolkit';

interface DeliDataState {
  name: string;
  lastname: string;
  streetAndHouseNr: [];
  postalCode: string;
  city: string;
  country: string;
  phoneNumber: number;
  additional: string;
}

const initialState: DeliDataState = {
  name: '',
  lastname: '',
  streetAndHouseNr: [],
  postalCode: '',
  city: '',
  country: '',
  phoneNumber: 0,
  additional: '',
};

export const deliDataSlice = createSlice({
  name: 'deliveryData',
  initialState,
  reducers: {
    setDeliData(state, action) {
      state.name = action.payload;
      state.lastname = action.payload;
      state.streetAndHouseNr = action.payload;
      state.postalCode = action.payload;
      state.city = action.payload;
      state.country = action.payload;
      state.phoneNumber = action.payload;
      state.additional = action.payload;
    },
  },
});

export const deliDataActions = deliDataSlice.actions;
