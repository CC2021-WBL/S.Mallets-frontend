import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncProducts } from '../slices/product-slice';
import { addToCart, Product } from '../slices/cart-slice';
import Cart from './Cart';

const CartPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchAsyncProducts());
  }, []);

  console.log(products);

  return (
    <div>
      <h1 className="p-8 text-center text-6xl">Products</h1>
      {products &&
        products.map((product: Product) => {
          return (
            <div key={product.id}>
              <p>{product.productName}</p>
              <p>{product.price} eurasków</p>
              <button onClick={() => dispatch(addToCart(product))}>
                DODAJ DO KOSZYKA
              </button>
              <p>------------------------------</p>
            </div>
          );
        })}
      <Cart />
    </div>
  );
};
export default CartPage;
