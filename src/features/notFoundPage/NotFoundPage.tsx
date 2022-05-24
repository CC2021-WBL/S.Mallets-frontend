import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoCarpet from '../../tools/LogoCarpet';
import ellipse from '../../assets/ellipse.png';

const linkStyle = 'text-base font-bold text-[#0050EC]';

function NotFoundPage() {
  const { t } = useTranslation('notFound');

  return (
    <div className="relative mx-auto mb-20 w-full max-w-7xl">
      <LogoCarpet className="absolute right-8 z-[1] hidden lg:block" />
      <div className="my-24 flex flex-col items-center">
        <img
          src={ellipse}
          alt="decoration logo"
          className="pb-8 pt-12"
          aria-hidden="true"
        />
        <h1 className="pb-3 text-4xl font-normal leading-[3rem]">
          {t('mainText')}
        </h1>
        <h3 className="pb-14 text-2xl font-bold leading-7">{t('question')}</h3>
        <nav className="flex items-center justify-between gap-9 rounded-2xl border px-9 py-7">
          <NavLink className={linkStyle} to={'/products-series'}>
            {t('productsList')}
          </NavLink>
          <NavLink className={linkStyle} to={'/service'}>
            {t('service')}
          </NavLink>
          <NavLink className={linkStyle} to={'/contact'}>
            {t('contact')}
          </NavLink>
          <NavLink className={linkStyle} to={'/'}>
            {t('home')}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NotFoundPage;
