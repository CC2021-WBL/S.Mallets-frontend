import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Animation from './Animation';
import i18n from '../../../i18n';
import { Loader } from '../../Loader';

// import { mockDataType } from '../../../assets/mockData/mockSeriesData';

export interface SeriesTypes {
  id: number;
  seriesImage: string;
  seriesAltText: { pl: string; en: string };
  seriesName: string;
}
const ProductsSeriesPage = () => {
  const { t } = useTranslation('others');
  const language = i18n.language as 'pl' | 'en';

  const [seriesData, setSeriesData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  // const toastId = toast.loading('Loading...');
  useEffect(() => {
    async function fetchSeriesData() {
      try {
        const series = await fetch(
          'https://s-mallets-backend.vercel.app/series/all',
          { method: 'GET', redirect: 'follow' },
        );
        const resJson = await series.json();
        if (series.status === 200) {
          setSeriesData(resJson);
          setIsPending(false);
          console.log(series);
          console.log(resJson);
        } else {
          toast.error('Buuu');
          // toast.error(t('toastBad'), {
          //   id: toastId,
          // });
        }
      } catch (error) {
        toast.error(':((((');
        // toast.error(t('toastBad'), {
        //   id: toastId,
        // });
      }
    }
    fetchSeriesData();
  }, []);

  return (
    <>
      <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col px-3 md:px-6 lg:px-8">
        <p className="mt-28 max-w-[33.3rem] px-3 text-left text-xl md:px-6 lg:px-8">
          {t('textOnSeries')}
        </p>

        <div className="relative mt-10 flex w-full flex-wrap justify-center  sm:mb-16">
          <Animation />
          {isPending && <Loader />}

          {seriesData &&
            Array.from(seriesData).map((index: any) => (
              <Link
                key={index.id}
                className="mb-14 flex w-[21.8rem] flex-col items-center py-0 hover:cursor-pointer sm:mb-6 sm:rounded-lg sm:py-9 sm:hover:shadow-lg md:h-[27.8rem]"
                to={`/products-series/${index.seriesName}`}
              >
                <img
                  src={'data:image/png;base64,' + index.seriesImage}
                  alt={index.seriesAltText[language]}
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
