import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../../assets/s-logo.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-44 max-w-[1240] mx-auto px-4">
      <img
        src={logo}
        alt="smallets logo"
        className={!nav ? 'p-4 w-72' : 'hidden'}
      />
      <ul className="hidden md:flex">
        <NavLink className="p-4" to="/product-series">
          produkty
        </NavLink>
        <NavLink className="p-4" to="/about">
          o mnie
        </NavLink>
        <NavLink className="p-4" to="/service">
          serwis
        </NavLink>
        <NavLink className="p-4" to="/contact">
          kontakt
        </NavLink>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer absolute right-8 top-8"
        aria-hidden="true"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 ease-in-out duration-500 bg-white'
            : 'fixed left-[-100%]'
        }
      >
        <img src={logo} alt="smallets logo" className="p-4 w-56" />
        <div className="uppercase p-4  flex flex-col z-50">
          <NavLink
            className="p-4 border-b border-grey-600"
            to="/product-series"
          >
            produkty
          </NavLink>

          <NavLink
            className="p-4 border-b border-grey-600"
            to="/about"
            onClick={handleNav}
          >
            o mnie
          </NavLink>

          <NavLink className="p-4 border-b border-grey-600" to="/service">
            serwis
          </NavLink>
          <NavLink className="p-4 border-b border-grey-600" to="/contact">
            kontakt
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
