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
          to={link}
          key={title}
          onClick={prop.handleNav}
          className={({ isActive }) =>
            isActive
              ? `${prop.className} md:text-lg sm:text-base font-medium`
              : prop.className
          }
        >
          {title}
        </NavLink>
      ))}
    </>
  );
};

export default NavBar;
