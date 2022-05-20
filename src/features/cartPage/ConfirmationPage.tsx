import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConfirmationPage = () => {
  const { t } = useTranslation('confirmation');
  return (
    <div className="mt-14  max-w-7xl self-start  px-6 text-xl md:px-9 lg:px-12">
      <div className="max-w-[40rem] ">
        <p className="mb-5">{t('thanks')}</p>
        <p className="mb-5">
          {t('number')} <span className="font-bold">11003</span>.
        </p>
        <p className="mb-10">{t('future')}</p>
        <p>{t('questions')}</p>

        <div className="mb-10  mt-12 flex h-[3.75rem] max-w-[27.5rem] items-center justify-center rounded bg-black text-white hover:cursor-pointer hover:opacity-75">
          <Link to="/contact">{t('contact')}</Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
