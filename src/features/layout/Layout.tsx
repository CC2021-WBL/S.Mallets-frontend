import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Layout = () => {
  return (
    <>
      {/* <div className="flex flex-col"> */}
      <Nav />
      <main className="mx-auto flex min-h-[calc(100vh-428px)] w-full max-w-7xl flex-col items-center">
        <Outlet />
      </main>
      <Footer />
      {/* </div> */}
    </>
  );
};
export default Layout;
