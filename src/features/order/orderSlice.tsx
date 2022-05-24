import { createSlice } from '@reduxjs/toolkit';

export interface OrderDetails {
  productId: number;
  quantity: number;
  headDiameter: number;
  stickLength: number;
  weight: number;
}

export interface Order {
  messageFromUser?: string;
  deliveryId?: number;
  name?: string;
  lastname?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  city?: string;
  streetAndNumber?: string;
  zipCode?: string;
}

interface OrderInterface {
  orderDetails: OrderDetails[];
  order: Order;
}

const initialState: OrderInterface = {
  orderDetails: [],
  order: {},
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchOrderDetails: (state, { payload }) => {
      return {
        ...state,
        orderDetails: [...payload],
      };
    },
    fetchDeliveryId: (state, { payload }) => {
      return {
        ...state,
        order: { ...state.order, deliveryId: payload },
      };
    },
  },
});
export const { fetchOrderDetails, fetchDeliveryId } = orderSlice.actions;

const orderReducer = orderSlice.reducer;

export default orderReducer;
