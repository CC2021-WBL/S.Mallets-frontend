import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <main className="mx-auto max-w-7xl grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
