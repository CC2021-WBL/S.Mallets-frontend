import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const {
    //  t,
    i18n,
  } = useTranslation('navFooter');
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="Nav" style={navStyle}>
        <NavLink to="/"> HomePage </NavLink>
        <NavLink to="/about-us"> AboutUs </NavLink>
        <NavLink to="/contact"> ContactPage </NavLink>
        <NavLink to="/user"> UserPage </NavLink>
        <NavLink to="/product-series"> ProductSeriesPage </NavLink>
        <NavLink to="/admin"> AdminPage </NavLink>
        <div>
          <button type="button" onClick={() => changeLanguage('pl')}>
            pl
          </button>
          <button type="button" onClick={() => changeLanguage('en')}>
            en
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
