import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import AboutMe from './common/aboutUs/AboutUs';
import AdminPage from './features/adminPage/AdminPage';
import CartPage from './features/layout/cart/CartPage';
import ContactPage from './common/contact/ContactPage';
import HomePage from './features/homePage/HomePage';
import Layout from './features/layout/Layout';
import ProductSeriesPage from './features/products/productSeries/ProductSeriesPage';
import ServicePage from './features/servicePage/ServicePage';
import UserPage from './features/userPage/UserPage';
import i18n from './i18n';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutMe />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product-series" element={<ProductSeriesPage />} />
              <Route path="/cart" element={<CartPage />} />
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
