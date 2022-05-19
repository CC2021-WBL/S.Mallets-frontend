import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  email: null,
  password: null,
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
      state.email = null;
      state.password = null;
    },
  },
});

export const authActions = authSlice.actions;
