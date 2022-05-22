import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import After from '../../assets/sticksAfter.png';
import Before from '../../assets/sticksBefore.png';

const ServicePage = () => {
  const { t } = useTranslation('others');
  return (
    <div className=" mx-6 my-12 w-full max-w-7xl px-3 md:px-6 lg:px-8">
      <div className="hero-service mx-4" />
      <div className="mt-12 flex flex-col gap-6 px-4 sm:flex-row ">
        <div className="max-w-full">
          <p className="mb-10 text-xl font-bold">{t('service')}</p>
          <p>{t('motto')}</p>
          <p className="mb-10">{t('doubts')}</p>
          <Link
            to="/contact"
            className="flex h-16 w-full items-center justify-center rounded bg-black text-white hover:opacity-75 md:w-96"
          >
            {t('contact')}
          </Link>
        </div>
        <div className="flex max-w-full flex-col items-end">
          <p className="self-start">{t('before')}</p>
          <img
            src={Before}
            alt="sticks before service with frayed heads"
            className="mb-8"
          />
          <p className="self-start">{t('after')}</p>
          <img src={After} alt="sticks after service without frayed heads" />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
