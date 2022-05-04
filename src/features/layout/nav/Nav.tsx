import { NavLink } from 'react-router-dom';

const navStyle = {
  background: 'orange',
  display: 'flex',
  margin: '0 auto',
  height: '4rem',
  width: '80%',
  justifyContent: 'space-between',
  padding: '1rem 1rem',
};

const Nav = () => {
  return (
    <div className="Nav" style={navStyle}>
      <NavLink to="/"> HomePage </NavLink>
      <NavLink to="/about-me"> AboutUs </NavLink>
      <NavLink to="/contact"> ContactPage </NavLink>
      <NavLink to="/user"> UserPage </NavLink>
      <NavLink to="/product-series"> ProductSeriesPage </NavLink>
      <NavLink to="/admin"> AdminPage </NavLink>
    </div>
  );
};

export default Nav;
