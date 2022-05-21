import { configureStore } from '@reduxjs/toolkit';

import { deliDataSlice } from '../features/deliveryPage/deliveryDataSlice';

const store = configureStore({
  reducer: { deliveryData: deliDataSlice.reducer },
});

export default store;
