import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <main className=" mx-auto flex h-[80vh] max-w-7xl flex-col ">
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Layout;
