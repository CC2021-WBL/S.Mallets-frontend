import { I18nextProvider, useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import AboutUs from './common/aboutUs/AboutUs';
import AdminPage from './features/adminPage/AdminPage';
import CartPage from './features/layout/cart/CartPage';
import ContactPage from './common/contact/ContactPage';
import HomePage from './features/homePage/HomePage';
import Layout from './features/layout/Layout';
import ProductSeriesPage from './features/products/productSeries/ProductSeriesPage';
import UserPage from './features/userPage/UserPage';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
function App() {
  const { t, i18n } = useTranslation('navFooter');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <h1 className="text-3xl font-bold underline">
          Hello world! {t('account')}
        </h1>
        <a
          href="https://github.com/orgs/CC2021-WBL/"
          target="_blank"
          rel="noreferrer"
        >
          FB
        </a>
        <div>
          <button type="button" onClick={() => changeLanguage('pl')}>
            pl
          </button>
          <button type="button" onClick={() => changeLanguage('en')}>
            en
          </button>
        </div>
        <p>{t('account')}</p>
        <p> {t('footer.about')}</p>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product-series" element={<ProductSeriesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
