import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './Cart';
import { AppDispatch, RootState } from '../../app/store';
import { Product, addToCart } from './slices/cartSlice';
import { fetchProducts } from './slices/productSlice';

import { NavLink } from 'react-router-dom';

const CartPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.list);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <div className="mx-auto w-full max-w-7xl sm:px-3 md:px-6 lg:px-8">
      <h1 className="p-8 text-center text-6xl">Products</h1>
      {products &&
        products.map((product: Product) => {
          return (
            <div key={product.id}>
              <button onClick={() => dispatch(addToCart(product))}>🛒</button>
              {product.productName} {product.price.toFixed(2)}€
              <p>------------------------------</p>
            </div>
          );
        })}
      <Cart />
      <NavLink to="/cart/delivery">Dostawa form</NavLink>
      <NavLink to="/cart/delivery/summary">Podsumowanie</NavLink>
    </div>
  );
};
export default CartPage;
