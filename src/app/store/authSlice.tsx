import { createSlice } from '@reduxjs/toolkit';

interface aaa {
  isAuthenticated: boolean;
  email: string;
  password: string;
}
const initialAuthState: aaa = {
  isAuthenticated: false,
  email: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload;
      state.password = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = '';
      state.password = '';
    },
  },
});

export const authActions = authSlice.actions;
