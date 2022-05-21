import { createSlice } from '@reduxjs/toolkit';

// interface aaa {
//   isAuthenticated: boolean;
//   email: string;
//   // password: string;
// }
const initialAuthState = {
  isAuthenticated: false,
  // email: '',
  // password: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const initialUserState = {
  email: '',
  name: '',
  lastname: '',
  roles: [],
  phoneNumber: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    user(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.phoneNumber = action.payload.phoneNumber;
      state.roles = action.payload.roles;
    },
  },
});

export const userActions = userSlice.actions;
export const authActions = authSlice.actions;
