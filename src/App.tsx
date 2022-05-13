import { I18nextProvider } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import AboutMe from './common/aboutUs/AboutUs';
import AdminPage from './features/adminPage/AdminPage';
import CartPage from './features/cartPage/CartPage';
import ContactPage from './common/contact/ContactPage';
import HomePage from './features/homePage/HomePage';
import Layout from './features/layout/Layout';
import LoginPage from './features/loginPage/LoginPage';
import ProductsPage from './features/products/ProductsPage';
import ProductsSeriesPage from './features/products/productsSeries/ProductsSeriesPage';
import ScrollToTop from './tools/ScrollToTop';
import ServicePage from './common/service/ServicePage';
import UserPage from './features/userPage/UserPage';
import i18n from './i18n';
import { Loader } from './features/Loader';

const FallbackLoader = () => (
  <div className="App">
    <Loader />
  </div>
);
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<FallbackLoader />}>
        <ScrollToTop>
          <div className="App">
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                  path="/products-series"
                  element={<ProductsSeriesPage />}
                />
                <Route path="/products-page" element={<ProductsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/service" element={<ServicePage />} />
              </Route>
            </Routes>
          </div>
        </ScrollToTop>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
