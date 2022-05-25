import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LogoCarpet from '../../tools/LogoCarpet';
import ProductCard from './ProductCard';
import { AppDispatch, RootState } from '../../app/store';
import { Loader } from '../Loader';
import { Product } from '../../app/slices/cartSlice';
import { fetchProducts } from '../../app/slices/productSlice';

const ProductsPage = () => {
  const { seriesName } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.list);
  const filteredProducts = products.filter(
    (product: Product) => product.seriesName == seriesName,
  );
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
    setIsPending(!pending);
  }, []);

  return (
    <div className="max-w-7x relative mx-auto w-full">
      {pending && <Loader />}
      <div className="py-4 px-12">
        <h1 className="py-2 text-2xl font-bold">
          {seriesName?.replace('-', ' ')}
        </h1>
      </div>
      {!pending && (
        <LogoCarpet className="absolute top-12 right-8 z-[1] hidden lg:block" />
      )}
      {!pending &&
        filteredProducts.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductsPage;
