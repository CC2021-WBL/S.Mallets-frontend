import { Outlet } from 'react-router-dom';

import Nav from './nav/Nav';

// import Footer from './footer/Footer';

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
};
export default Layout;
