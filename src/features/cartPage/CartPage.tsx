import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncProducts } from '../slices/product-slice';
import { Product } from '../slices/cart-slice';

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
      <h1 className="p-8 text-center text-6xl">Cart Page</h1>
      {products &&
        products.map((product: Product) => {
          return <p key={product.id}>{product.productName}</p>;
        })}
    </div>
  );
};
export default CartPage;
