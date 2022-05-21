import { createSlice } from '@reduxjs/toolkit';

interface DeliDataInterface {
  name: string;
  lastname: string;
  email: string;
  streetAndHouseNr: string;
  postalCode: string;
  city: string;
  country: string;
  phoneNumber: number | string;
  additional: string;
}

const initialState: DeliDataInterface = {
  name: '',
  lastname: '',
  email: '',
  streetAndHouseNr: '',
  postalCode: '',
  city: '',
  country: '',
  phoneNumber: '',
  additional: '',
};

export const deliDataSlice = createSlice({
  name: 'deliveryData',
  initialState,
  reducers: {
    setDeliData(
      state: DeliDataInterface,
      action: {
        payload: DeliDataInterface;
      },
    ) {
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.streetAndHouseNr = action.payload.streetAndHouseNr;
      state.postalCode = action.payload.postalCode;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.phoneNumber = action.payload.phoneNumber;
      state.additional = action.payload.additional;
    },
  },
});

export const deliDataActions = deliDataSlice.actions;
