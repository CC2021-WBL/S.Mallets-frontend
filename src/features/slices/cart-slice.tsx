import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  productName: string;
  price: number;
  headDiameter: number;
  stickLength: number;
  weight: number;
  productImage: string;
  modifiedAt: Date;
  createdAt: Date;
  productDescriptionKey: string;
  productAltTextKey: string;
  seriesId: string;
  quantity: number;
}
const initialState: Product[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const productExist = state.find((product) => product.id === id);
      if (productExist) {
        return state.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    increment: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    },
    decrement: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    },
    clear: () => {
      return [];
    },
  },
});
export const { addToCart, increment, decrement, clear } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
