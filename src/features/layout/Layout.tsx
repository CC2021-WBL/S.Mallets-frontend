import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Navbar from './nav/NavBar';

// import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      {/* <Nav /> */}
      <Navbar />
      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
export default Layout;
