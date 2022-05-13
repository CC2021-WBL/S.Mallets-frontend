/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Animation from './Animation';
import i18n from '../../../i18n';
import { mockDataType } from '../../../assets/mockData/mockSeriesData';

const ProductsSeriesPage: React.FC<{ mockSeries: mockDataType[] }> = (
  props,
) => {
  const { t } = useTranslation('others');
  const language = i18n.language as 'pl' | 'en';
  return (
    <>
      <p className="ml-8 mt-28 max-w-[33.3rem] text-xl">{t('textOnSeries')}</p>
      <Animation />
      {/* <div className=" relative flex max-w-7xl flex-wrap justify-center">
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
      </div> */}

      <div className="relative flex max-w-7xl flex-wrap justify-center sm:mb-16">
        {/* // eslint-disable-next-line react/prop-types */}
        {props.mockSeries
          .sort(() => 0.5 - Math.random())
          .slice(0, 6)
          .map((index: mockDataType) => (
            <Link
              key={index.id}
              className="mb-14 flex w-[21.8rem] flex-col items-center py-0 hover:cursor-pointer sm:mb-6 sm:rounded-lg sm:py-9 sm:hover:shadow-lg md:h-[27.8rem]"
              to="/product-series"
            >
              <img
                src={index.seriesImage}
                alt={
                  // index.altText
                  // i18n.language === 'en' ? index.altText.en : index.altText.pl

                  index.altText[language]
                }
                className="mb-10 h-52 w-52 rounded-full md:mb-20"
              />
              <h3 className="text-xl font-bold">{index.seriesName}</h3>
            </Link>
          ))}
      </div>
    </>
  );
};
export default ProductsSeriesPage;
