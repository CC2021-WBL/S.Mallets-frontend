import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoCarpet from '../tools/LogoCarpet';
import cross from '../assets/cross.png';

function NoAccess() {
  const { t } = useTranslation('others');
  return (
    <div className="relative mx-6 my-12 flex w-full max-w-7xl flex-col items-center px-6 md:px-10 ">
      <LogoCarpet className="absolute -top-[9.7rem] right-14 z-[1] hidden lg:block " />
      <img
        src={cross}
        alt="crossed sticks"
        className="mb-14 h-[18.7rem] w-[18.7rem] rounded-full"
      />
      <h1 className="mb-6 text-center text-4xl">{t('noAccess')}</h1>
      <h2 className="text-center text-2xl font-bold">{t('noAccessBack')}</h2>
      <div className="mt-14 flex max-w-[31.25rem] items-center gap-9 rounded-2xl border border-[#E6E6E6] py-7 px-9 font-bold text-[#0050EC]">
        <Link to="/login" className="w-fit">
          {t('login')}
        </Link>
        <Link to="/" className="w-fit">
          {t('back')}
        </Link>
      </div>
    </div>
  );
}

export default NoAccess;
