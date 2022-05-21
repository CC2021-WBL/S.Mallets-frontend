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
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.streetAndHouseNr = action.payload;
      state.postalCode = action.payload.postalCode;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.phoneNumber = action.payload.phoneNumber;
      state.additional = action.payload.additional;
    },
  },
});

export const deliDataActions = deliDataSlice.actions;
