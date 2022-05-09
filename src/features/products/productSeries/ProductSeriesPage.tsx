import { useTranslation } from 'react-i18next';

import Animation from './Animation';
import { mock } from './mockSeries';

const ProductSeriesPage = (): JSX.Element => {
  const { t } = useTranslation('others');
  return (
    <>
      <p className="ml-8 mt-28 max-w-[33.3rem] text-xl">{t('textOnSeries')}</p>
      <div className=" relative flex max-w-7xl flex-wrap justify-center">
        {<Animation />}
        {mock.map((index) => (
          <div
            key={index.id}
            className="flex h-[27.8rem] w-[21.8rem] flex-col items-center py-9"
          >
            <img
              src={index.productImage}
              alt={index.altText}
              className="mb-20 h-52 w-52 rounded-full"
            />
            <h3 className="text-xl font-bold">{index.seriesName}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductSeriesPage;
