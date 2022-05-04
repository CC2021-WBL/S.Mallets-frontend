import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer';
import Nav from './nav/Nav';

// const footerStyle = {
//   background: 'tomato',
//   display: 'flex',
//   margin: '0 auto',
//   justifyContent: 'space-between',
//   padding: '1rem 1rem',
//   bottom: '0',
//   left: '0',
//   right: '0',
//   height: '5rem',
//   width: '80%',
// };

const Layout = () => {
  return (
    <>
      <Nav />
      <div
        className=" xl container mx-auto flex 
       h-[80vh]
       flex-col "
      >
        <div>
          <Outlet />
        </div>
        {/* <footer
        style={{ position: 'absolute', ...footerStyle }}
        className="footer"
      >
        footer
      </footer> */}
      </div>
      <Footer />
    </>
  );
};
export default Layout;
