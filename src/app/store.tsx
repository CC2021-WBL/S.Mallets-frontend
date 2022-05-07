import { configureStore } from '@reduxjs/toolkit';

import navSlice from '../features/layout/nav/languageSlice';

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
