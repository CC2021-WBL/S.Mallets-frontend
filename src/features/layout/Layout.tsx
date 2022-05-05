import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <main className=" xl container mx-auto flex h-[80vh] flex-col ">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
