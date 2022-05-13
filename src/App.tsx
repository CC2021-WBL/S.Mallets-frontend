import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import AboutMe from './common/aboutUs/AboutUs';
import AdminPage from './features/adminPage/AdminPage';
import CartPage from './features/cartPage/CartPage';
import ContactPage from './common/contact/ContactPage';
import HomePage from './features/homePage/HomePage';
import Layout from './features/layout/Layout';
import LoginPage from './features/loginPage/LoginPage';
import ProductSeriesPage from './features/products/productSeries/ProductSeriesPage';
import ServicePage from './common/service/ServicePage';
import UserPage from './features/userPage/UserPage';
import i18n from './i18n';
import { Loader } from './features/Loader';
import { mock } from './assets/mockData/mockSeriesData';

function App() {
  const aaa = localStorage.getItem('i18nextLng') as string;
  useEffect(() => {
    const getLanguage = () => {
      // localStorage.getItem('i18nextLng') !== ('pl' && 'en') &&
      //   localStorage.setItem('i18nextLng', 'pl');
      if (!['en', 'pl'].includes(aaa)) {
        localStorage.setItem('i18nextLng', 'pl');
      }
    };
    getLanguage();
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage mockSeries={mock} />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product-series" element={<ProductSeriesPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/service" element={<ServicePage />} />
            </Route>
          </Routes>
        </div>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
