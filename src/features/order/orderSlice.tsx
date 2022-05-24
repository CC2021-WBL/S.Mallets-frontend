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
    fetchOrderData: (state, { payload }) => {
      return {
        ...state,
        order: {
          ...state.order,
          messageFromUser: payload.messageFromUser,
          name: payload.name,
          lastname: payload.lastname,
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          country: payload.country,
          city: payload.city,
          streetAndNumber: payload.streetAndNumber,
          zipCode: payload.zipCode,
        },
      };
    },
  },
});
export const { fetchOrderDetails, fetchDeliveryId, fetchOrderData } =
  orderSlice.actions;

const orderReducer = orderSlice.reducer;

export default orderReducer;
