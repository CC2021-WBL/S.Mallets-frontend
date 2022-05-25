import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LogoCarpet from '../../../tools/LogoCarpet';
import i18n from '../../../i18n';
import { Loader } from '../../Loader';

export interface SeriesTypes {
  id: number;
  seriesImage: string;
  seriesAltText: { pl: string; en: string };
  seriesName: string;
}
const ProductsSeriesPage = () => {
  const { t } = useTranslation('others');
  const language = i18n.language as 'pl' | 'en';

  const [seriesData, setSeriesData] = useState<null | SeriesTypes[]>(null);
  const [isPending, setIsPending] = useState(true);

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
        } else {
          toast.error(t('toastBad'));
        }
      } catch (error) {
        toast.error(t('toastBad'));
      }
    }
    fetchSeriesData();
  }, []);

  return (
    <>
      <div className="mx-auto mt-8 mb-16 flex w-full max-w-7xl flex-col px-3 md:px-6 lg:px-8">
        <p className=" max-w-[33.3rem] px-3 text-left text-xl md:px-6 lg:px-8">
          {t('textOnSeries')}
        </p>

        <div className="relative mt-10 flex w-full flex-wrap justify-center  sm:mb-16">
          <LogoCarpet className="absolute -top-[11.5625rem] right-8 -z-[1] hidden lg:block" />
          {isPending && <Loader />}

          {seriesData &&
            Array.from(seriesData).map((index: SeriesTypes) => (
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
                <p className="text-xl font-bold">
                  {index.seriesName.replace('-', ' ')}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};
export default ProductsSeriesPage;
