import { createSlice } from '@reduxjs/toolkit';

export interface DeliDataInterface {
  name: string;
  lastname: string;
  email: string;
  streetAndNumber: string;
  zipCode: string;
  city: string;
  country: string;
  phoneNumber: number | string;
  messageFromUser: string;
}

const initialState: DeliDataInterface = {
  name: '',
  lastname: '',
  email: '',
  streetAndNumber: '',
  zipCode: '',
  city: '',
  country: '',
  phoneNumber: '',
  messageFromUser: '',
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
      state.streetAndNumber = action.payload.streetAndNumber;
      state.zipCode = action.payload.zipCode;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.phoneNumber = action.payload.phoneNumber;
      state.messageFromUser = action.payload.messageFromUser;
    },
  },
});

export const { setDeliData } = deliDataSlice.actions;

const deliDataReducer = deliDataSlice.reducer;

export default deliDataReducer;
