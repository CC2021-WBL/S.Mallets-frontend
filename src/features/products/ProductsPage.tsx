import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LogoCarpet from '../../tools/LogoCarpet';
import ProductCard from './ProductCard';
import { AppDispatch, RootState } from '../../app/store';
import { Loader } from '../Loader';
import { Product } from '../cartPage/cartSlice';
import { fetchProducts } from './productSlice';

// import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { seriesName } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.list);
  const filteredProducts = products.filter(
    (product: Product) => product.seriesName == seriesName,
  );

  // const { i18n } = useTranslation();
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
    setIsPending(!pending);
  }, []);

  return (
    <div className="max-w-7x relative mx-auto w-full">
      {pending && <Loader />}
      <div className="py-4 px-12">
        <h1 className="py-2 text-2xl font-bold">{seriesName}</h1>
        {/* <h2 className="max-w-3xl py-2 text-xl">
          {i18n.language === 'en' ? seriesLang.en : seriesLang.pl}
        </h2> */}
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
