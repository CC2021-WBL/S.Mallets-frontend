import { createSlice } from '@reduxjs/toolkit';

interface UserStateTypes {
  id: string;
  email: string;
  name: string;
  lastname: string;
  roles: string[];
  phoneNumber: string | number;
  address: Address;
}

interface Address {
  name: string;
  lastname: string;
  email: string;
  streetAndNumber: string;
  zipCode: string;
  city: string;
  country: string;
  phoneNumber: string;
}

const initialUserState: UserStateTypes = {
  id: '',
  email: '',
  name: '',
  lastname: '',
  roles: [],
  phoneNumber: '',
  address: {
    name: '',
    lastname: '',
    email: '',
    streetAndNumber: '',
    zipCode: '',
    city: '',
    country: '',
    phoneNumber: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    userLogin(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.roles = action.payload.roles;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
    },
    userLogout(state) {
      state.id = '';
      state.email = '';
      state.name = '';
      state.lastname = '';
      state.roles = [];
      state.phoneNumber = '';
      state.address = {};
    },
  },
});

export const userActions = userSlice.actions;
