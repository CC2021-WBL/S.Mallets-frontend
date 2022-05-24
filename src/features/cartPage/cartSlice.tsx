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

interface CartInterface {
  products: Product[];
  counter: number;
}

const initialState: CartInterface = {
  products: [],
  counter: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleEdit: (state, { payload }) => {
      const productsS = state.products.map((product: Product) => {
        if (product.id === payload) {
          return {
            ...product,
            edited: !product.edited,
          };
        }
        return product;
      });
      return { ...state, products: productsS };
    },
    addToCart: (state, { payload }) => {
      const { id } = payload;
      const productExist = state.products.find(
        (product: Product) => product.id === id,
      );
      if (productExist) {
        const newProducts = state.products.map((product: Product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
        return { ...state, products: newProducts, counter: state.counter + 1 };
      } else {
        return {
          ...state,
          products: [...state.products, { ...payload, quantity: 1 }],
          counter: state.counter + 1,
        };
      }
    },
    removeFromCart: (state, { payload }) => {
      let removedProductQuantity;
      const removedProduct: Product | undefined = state.products.find(
        (product: Product) => product.id == payload,
      );
      if (removedProduct == undefined) {
        removedProductQuantity = 0;
      } else {
        removedProductQuantity = removedProduct.quantity;
      }
      const newProducts = state.products.filter(
        (product: Product) => product.id !== payload,
      );

      return {
        ...state,
        products: newProducts,
        counter: state.counter - removedProductQuantity,
      };
    },
    increment: (state, { payload }) => {
      const newProducts = state.products.map((product: Product) => {
        if (product.id === payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return { ...state, products: newProducts, counter: state.counter + 1 };
    },
    decrement: (state, { payload }) => {
      const newProducts = state.products.map((product: Product) => {
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
      return { ...state, products: newProducts, counter: state.counter - 1 };
    },
    incrementHeadDiameter: (state, { payload }) => {
      const updatedProducts = state.products.map((product: Product) => {
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
      return { ...state, products: updatedProducts, counter: state.counter };
    },
    decrementHeadDiameter: (state, { payload }) => {
      const updatedProducts = state.products.map((product: Product) => {
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
      return { ...state, products: updatedProducts };
    },
    incrementStickLength: (state, { payload }) => {
      const updatedProducts = state.products.map((product: Product) => {
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
      return { ...state, products: updatedProducts };
    },
    decrementStickLength: (state, { payload }) => {
      const updatedProducts = state.products.map((product: Product) => {
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
      return { ...state, products: updatedProducts };
    },
    incrementWeight: (state, { payload }) => {
      const updatedProducts = state.products.map((product: Product) => {
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
      return { ...state, products: updatedProducts };
    },
    decrementWeight: (state, { payload }) => {
      const updatedProducts = state.products.map((product: Product) => {
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
      return { ...state, products: updatedProducts };
    },
    clear: () => {
      return {
        ...initialState,
      };
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
