import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  const { t } = useTranslation('breadcrumbs');
  const routes: any = [
    { path: '/', breadcrumb: `${t('home')}` },
    { path: '/about', breadcrumb: `${t('about')}` },
    { path: '/contact', breadcrumb: `${t('contact')}` },
    { path: '/products-series', breadcrumb: `${t('series')}` },
    { path: '/products-series/:seriesName', breadcrumb: `${t('products')}` },
    { path: '/service', breadcrumb: `${t('service')}` },
    { path: '/cart', breadcrumb: `${t('cart')}` },
    { path: '/login', breadcrumb: `${t('login')}` },
    { path: '/user', breadcrumb: `${t('user')}` },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
      <Nav />
      <div className="mx-auto  max-w-7xl  px-6 md:px-9 lg:px-12">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <span key={match.pathname}>
            <NavLink
              to={match.pathname}
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
            >
              {breadcrumb} <span className="mr-2">{'>'}</span>
            </NavLink>
          </span>
        ))}
      </div>
      <main className="mx-auto flex min-h-[calc(100vh-428px)] w-full max-w-7xl flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
