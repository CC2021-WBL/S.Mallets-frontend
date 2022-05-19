import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../slices/product-slice';
import { addToCart, Product } from '../slices/cart-slice';
import Cart from './Cart';
import { AppDispatch, RootState } from '../../app/store';

const CartPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.list);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <div>
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
    </div>
  );
};
export default CartPage;
