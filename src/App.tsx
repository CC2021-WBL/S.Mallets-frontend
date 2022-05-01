import { NavLink, Outlet } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// commits to have a prefix

const navStyle = {
  background: 'orange',
  display: 'flex',
  margin: '0 auto',
  height: '4rem',
  width: '80%',
  justifyContent: 'space-between',
  padding: '1rem 1rem',
};
const footerStyle = {
  background: 'tomato',
  display: 'flex',
  margin: '0 auto',
  justifyContent: 'space-between',
  padding: '1rem 1rem',
  bottom: '0',
  left: '0',
  right: '0',
  height: '5rem',
  width: '80%',
};
const mainStyle = {
  background: 'grey',
  display: 'flex',
  margin: '0 auto',
  width: '80%',
  height: 'calc(100vh - 4rem)',
  justifyContent: 'space-between',
  padding: '1rem 1rem',
};
const HomePage = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      HomePage
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      AboutUs
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      ContactPage
    </div>
  );
};

const UserPage = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      UserPage
    </div>
  );
};

const ProductSeriesPage = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      ProductSeriesPage
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      CartPage
    </div>
  );
};
const AdminPage = () => {
  return (
    <div className="text-3xl font-bold underline" style={mainStyle}>
      AdminPage
    </div>
  );
};

const Nav = () => {
  return (
    <div className="Nav" style={navStyle}>
      <NavLink to="/"> HomePage </NavLink>
      <NavLink to="/aboutUs"> AboutUs </NavLink>
      <NavLink to="/contact"> ContactPage </NavLink>
      <NavLink to="/user"> UserPage </NavLink>
      <NavLink to="/productSeries"> ProductSeriesPage </NavLink>
      <NavLink to="/admin"> AdminPagePage </NavLink>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <Nav />
      <div style={{ margin: '0 auto' }}>
        <Outlet />
      </div>
      <footer
        style={{ position: 'absolute', ...footerStyle }}
        className="footer"
      >
        footer
      </footer>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/productSeries" element={<ProductSeriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
