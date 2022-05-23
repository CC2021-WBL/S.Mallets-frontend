import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LogoCarpet from '../../tools/LogoCarpet';
import ProductCard from './ProductCard';
import { Loader } from '../Loader';
import { seriesMock } from '../../assets/mockData/mockPoductData';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../cartPage/slices/productSlice';
import { Product } from '../cartPage/slices/cartSlice';

const ProductsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.list);

  console.log(products);

  const { i18n } = useTranslation();
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
    setIsPending(!pending);
  }, []);

  const seriesLang = seriesMock.seriesDescription;

  return (
    <div className="max-w-7x relative mx-auto w-full">
      {pending && <Loader />}
      <div className="py-4 px-12">
        <h1 className="py-2 text-2xl font-bold">{seriesMock.seriesName}</h1>
        <h2 className="max-w-3xl py-2 text-xl">
          {i18n.language === 'en' ? seriesLang.en : seriesLang.pl}
        </h2>
      </div>
      {!pending && (
        <LogoCarpet className="absolute top-12 right-8 z-[1] hidden lg:block" />
      )}
      {!pending &&
        products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductsPage;
