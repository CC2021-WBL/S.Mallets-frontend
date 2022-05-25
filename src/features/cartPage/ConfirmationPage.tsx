import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoCarpet from '../../tools/LogoCarpet';

const ConfirmationPage = () => {
  const { t } = useTranslation('confirmation');
  const location: any = useLocation();

  return (
    <div className="relative mt-14 w-full max-w-7xl self-start  px-6 text-xl md:px-9 lg:px-12">
      <LogoCarpet className="absolute -top-[9.7rem] right-12  hidden lg:block" />
      <div className="max-w-[40rem] ">
        <p className="mb-5">{t('thanks')}</p>
        <p className="mb-5">
          {t('number')}:<span className="font-bold"> {location.state.id}</span>.
        </p>
        <p className="mb-10">{t('future')}</p>
        <p>{t('questions')}</p>

        <Link
          to="/contact"
          className="mb-10  mt-12 flex h-[3.8rem] max-w-[27.5rem] items-center justify-center rounded bg-black text-white hover:cursor-pointer hover:opacity-75"
        >
          {t('contact')}
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
