import { createSlice } from '@reduxjs/toolkit';

import { UserWithOrdersArray } from '../features/userPage/UserPage';

const initialState = {
  orders: [
    {
      city: '',
      country: '',
      createdAt: '',
      email: '',
      finalCostEuro: '',
      id: '',
      lastname: '',
      messageFromUser: '',
      modifiedAt: '',
      name: '',
      orderStatus: '',
      phoneNumber: '',
      streetAndNumber: '',
      zipCode: '',
    },
  ],
};

export const userWithOrdersSlice = createSlice({
  name: 'userWithOrders',
  initialState,
  reducers: {
    setOrdersData(
      state: { orders: any[] },
      action: { payload: UserWithOrdersArray },
    ) {
      state.orders = action.payload.orders;
    },
  },
});

export const userWithOrdersActions = userWithOrdersSlice.actions;
