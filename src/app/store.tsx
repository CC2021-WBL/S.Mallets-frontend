import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  email: null,
  password: null,
};

const authSlice = createSlice({
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

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authActions = authSlice.actions;

export default store;
