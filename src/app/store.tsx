import { configureStore } from '@reduxjs/toolkit';

import { deliDataSlice } from './dliveryDataSlice';

const store = configureStore({
  reducer: { deliveryData: deliDataSlice.reducer },
});

export default store;
