import { createSlice } from '@reduxjs/toolkit';

interface AuthStateTypes {
  isAuthenticated: boolean;
}

const initialAuthState: AuthStateTypes = {
  isAuthenticated: false,
};

const authSlice = createSlice({
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

export const { login, logout } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
