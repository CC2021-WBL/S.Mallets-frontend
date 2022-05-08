import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Backdrop from './Backdrop';
import LanguageButtons from './LanguageButtons';
import NavBar from './NavBar';
import logo from '../../../assets/s-logo.svg';
import { navBurgerStyles, navStyles } from './navStyles';

const Nav = () => {
  const { t, i18n } = useTranslation('mainNav');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 sm:h-36 md:h-44 max-w-7xl mx-auto sm:px-3 md:px-6 lg:px-8">
      <div
        className={
          !nav ? 'p-6 sm:p-3 lg:p-4 w-36 sm:w-48  md:w-64 lg:w-72' : 'hidden'
        }
      >
        <NavLink to="/">
          <img src={logo} alt="smallets logo" width="100%" height="100%" />
        </NavLink>
      </div>
      <section className="hidden sm:block">
        <div className="flex p-4 pl-8 gap-8 justify-end text-2xl">
          <NavLink to="/login">
            <BiUser />
          </NavLink>
          <NavLink to="/cart">
            <BsCart3 />
          </NavLink>
          <LanguageButtons
            changeLanguage={changeLanguage}
            className={'text-sm'}
            language={i18n.language}
          />
        </div>
        <nav className="hidden sm:flex tracking-wider">
          <NavBar t={t} className={navStyles} />
        </nav>
      </section>
      <div
        onClick={handleNav}
        className="block sm:hidden cursor-pointer absolute right-7 top-7 z-10"
        aria-hidden="true"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <aside
        className={
          nav
            ? 'menu fixed left-0 top-0 w-3/5 h-full border-r border-r-grey-900 ease-in-out duration-500 bg-white z-10'
            : 'fixed left-[-100%]'
        }
      >
        <header className="flex justify-between items-center pl-6">
          <h1 className="text-2xl font-semibold tracking-wider">Menu</h1>
          <LanguageButtons
            changeLanguage={changeLanguage}
            className="text-sm p-6"
            language={i18n.language}
          />
        </header>

        <nav className="tracking-wider p-4 flex flex-col z-50">
          <NavBar t={t} className={navBurgerStyles} handleNav={handleNav} />
        </nav>
        <section className="px-4">
          <NavLink
            className="flex w-full p-2 px-4 gap-8 justify-between hover:underline"
            to="/login"
            onClick={handleNav}
          >
            <p className="text-sm tracking-wider">{t('login')}</p>
            <BiUser className="text-2xl" />
          </NavLink>
          <NavLink
            className="flex w-full p-4 px-4 gap-8 justify-between border-b hover:underline"
            to="/cart"
            onClick={handleNav}
          >
            <p className="text-sm tracking-wider">{t('cart')}</p>
            <BsCart3 className="text-2xl" />
          </NavLink>
        </section>
      </aside>
      {nav && <Backdrop handleNav={handleNav} />}
    </div>
  );
};

export default Nav;
