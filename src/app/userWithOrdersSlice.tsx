import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

export const userWithOrdersSlice = createSlice({
  name: 'userWithOrders',
  initialState,
  reducers: {
    setOrdersData(state: any[], action: any) {
      state.push(action.payload);
    },
  },
});

export const userWithOrdersActions = userWithOrdersSlice.actions;
