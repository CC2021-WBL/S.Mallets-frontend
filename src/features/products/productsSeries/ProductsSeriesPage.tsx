import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Animation from './Animation';
import i18n from '../../../i18n';
import { mockDataType } from '../../../assets/mockData/mockSeriesData';

const ProductsSeriesPage: React.FC<{ mockSeries: mockDataType[] }> = (prop) => {
  const { t } = useTranslation('others');
  const language = i18n.language as 'pl' | 'en';
  return (
    <>
      <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col px-3 md:px-6 lg:px-8">
        <p className="mt-28 max-w-[33.3rem] px-3 text-left text-xl md:px-6 lg:px-8">
          {t('textOnSeries')}
        </p>

        <div className="relative mt-10 flex w-full flex-wrap justify-center  sm:mb-16">
          <Animation />

          {prop.mockSeries.map((index: mockDataType) => (
            <Link
              key={index.id}
              className="mb-14 flex w-[21.8rem] flex-col items-center py-0 hover:cursor-pointer sm:mb-6 sm:rounded-lg sm:py-9 sm:hover:shadow-lg md:h-[27.8rem]"
              to={`/products-page/${index.seriesName}`}
            >
              <img
                src={index.seriesImage}
                alt={index.altText[language]}
                className="mb-10 h-52 w-52 rounded-full md:mb-20"
              />
              <p className="text-xl font-bold">{index.seriesName}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsSeriesPage;
