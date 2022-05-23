import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  productModel: string;
  price: number;
  headDiameter: number;
  stickLength: number;
  weight: number;
  productImage: string;
  modifiedAt: Date;
  createdAt: Date;
  productDescriptionKey: string;
  productAltTextKey: string;
  seriesName: string;
  quantity: number;
  edited: boolean;
  productAltText: {
    pl: string;
    en: string;
  };
  productDescription: {
    key: string;
    pl: string;
    en: string;
  };
  productImages: string[];
}

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleEdit: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            edited: !product.edited,
          };
        }
        return product;
      });
    },
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
    removeFromCart: (state, { payload }) => {
      return state.filter((product) => product.id !== payload);
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
          if (product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
        }
        return product;
      });
    },
    incrementHeadDiameter: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          if (product.headDiameter < 50) {
            return {
              ...product,
              headDiameter: product.headDiameter + 1,
            };
          }
        }
        return product;
      });
    },
    decrementHeadDiameter: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          if (product.headDiameter > 30) {
            return {
              ...product,
              headDiameter: product.headDiameter - 1,
            };
          }
        }
        return product;
      });
    },
    incrementStickLength: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          if (product.stickLength < 38) {
            return {
              ...product,
              stickLength: product.stickLength + 0.5,
            };
          }
        }
        return product;
      });
    },
    decrementStickLength: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          if (product.stickLength > 35) {
            return {
              ...product,
              stickLength: product.stickLength - 0.5,
            };
          }
        }
        return product;
      });
    },
    incrementWeight: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          if (product.weight < 38) {
            return {
              ...product,
              weight: product.weight + 1,
            };
          }
        }
        return product;
      });
    },
    decrementWeight: (state, { payload }) => {
      return state.map((product) => {
        if (product.id === payload) {
          if (product.weight > 29) {
            return {
              ...product,
              weight: product.weight - 1,
            };
          }
        }
        return product;
      });
    },
    clear: () => {
      return [];
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  incrementHeadDiameter,
  decrementHeadDiameter,
  incrementStickLength,
  decrementStickLength,
  incrementWeight,
  decrementWeight,
  clear,
  toggleEdit,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
