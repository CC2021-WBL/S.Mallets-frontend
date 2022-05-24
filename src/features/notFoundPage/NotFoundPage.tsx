import { useTranslation } from 'react-i18next';

import ErrorTextCart from './ErrorTextCart';
import LogoCarpet from '../../tools/LogoCarpet';
import NavFromError, { LinksType } from './NavFromError';

function NotFoundPage() {
  const { t } = useTranslation('notFound');

  const links: LinksType[] = [
    {
      to: '/products-series',
      linkText: t('productsList'),
    },
    {
      to: '/service',
      linkText: t('service'),
    },
    {
      to: '/contact',
      linkText: t('contact'),
    },
    {
      to: '/',
      linkText: t('home'),
    },
  ];

  return (
    <div className="relative mx-auto mb-20 w-full max-w-7xl">
      <LogoCarpet className="absolute right-8 z-[1] hidden lg:block" />
      <div className="my-24 flex flex-col items-center">
        <ErrorTextCart
          mainText={t('mainText')}
          subtext={t('question')}
        ></ErrorTextCart>
        <NavFromError links={links}></NavFromError>
      </div>
    </div>
  );
}

export default NotFoundPage;
