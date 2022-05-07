import { NavLink } from 'react-router-dom';

const NavBar = (prop: {
  t: any;
  className: string;
  handleNav?: () => void;
}) => {
  return (
    <>
      {[
        [`${prop.t('products')}`, '/product-series'],
        [`${prop.t('about')}`, '/about'],
        [`${prop.t('service')}`, '/service'],
        [`${prop.t('contact')}`, '/contact'],
      ].map(([title, link]) => (
        <NavLink
          className={prop.className}
          to={link}
          key={title}
          onClick={prop.handleNav}
        >
          {title}
        </NavLink>
      ))}
    </>
  );
};

export default NavBar;
