import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col">
        <Nav />
        <main className="main mx-auto min-h-[calc(100vh-428px)] max-w-7xl">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
