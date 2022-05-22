import { NavLink } from 'react-router-dom';

const navLinkArray = [
  ['products', '/products-series'],
  ['about', '/about'],
  ['service', '/service'],
  ['contact', '/contact'],
];

const NavBar = (prop: {
  t: any;
  className: string;
  handleNav?: () => void;
}) => {
  return (
    <>
      {navLinkArray.map(([title, link]) => (
        <NavLink
          to={link}
          key={title}
          onClick={prop.handleNav}
          className={({ isActive }) =>
            isActive
              ? `${prop.className} font-medium sm:scale-110 md:scale-125`
              : prop.className
          }
        >
          {prop.t(title)}
        </NavLink>
      ))}
    </>
  );
};

export default NavBar;
