import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: { showNav: false },
  reducers: {
    toggle(state) {
      state.showNav = !state.showNav;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
