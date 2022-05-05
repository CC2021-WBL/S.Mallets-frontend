import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
export default Layout;
