import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Backdrop from './Backdrop';
import LanguageButtons from './LanguageButtons';
import logo from '../../../assets/s-logo.svg';
import { burgerNavStyles, navStyles } from './navStyles';

const Navbar = () => {
  const { t, i18n } = useTranslation('navBar');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 sm:h-36 md:h-44 max-w-7xl mx-auto sm:px-3 md:px-6 lg:px-8">
      <img
        src={logo}
        alt="smallets logo"
        className={!nav ? 'p-6 lg:p-4 w-36 sm:w-48 md:w-64 lg:w-72' : 'hidden'}
      />
      <div className="hidden sm:block">
        <div className="flex p-4 pl-8 gap-8 justify-end">
          <BiUser className="text-2xl" />
          <BsCart3 className="text-2xl" />
          <LanguageButtons
            changeLanguage={changeLanguage}
            className="text-sm"
          />
        </div>
        <nav className="hidden sm:flex">
          <NavLink className={navStyles} to="/product-series">
            {t('products')}
          </NavLink>
          <NavLink className={navStyles} to="/about">
            {t('about')}
          </NavLink>
          <NavLink className={navStyles} to="/service">
            {t('service')}
          </NavLink>
          <NavLink className={navStyles} to="/contact">
            {t('contact')}
          </NavLink>
        </nav>
      </div>
      <div
        onClick={handleNav}
        className="block sm:hidden cursor-pointer absolute right-7 top-7 z-10"
        aria-hidden="true"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'menu fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 ease-in-out duration-500 bg-white z-10'
            : 'fixed left-[-100%]'
        }
      >
        <header className="flex justify-between items-center pl-6">
          <h1 className="text-2xl font-semibold">Menu</h1>
          <LanguageButtons
            changeLanguage={changeLanguage}
            className="text-sm p-6"
          />
        </header>

        <nav className="uppercase p-4  flex flex-col z-50">
          <NavLink className={burgerNavStyles} to="/product-series">
            {t('products')}
          </NavLink>
          <NavLink className={burgerNavStyles} to="/about" onClick={handleNav}>
            {t('about')}
          </NavLink>
          <NavLink className={burgerNavStyles} to="/service">
            {t('service')}
          </NavLink>
          <NavLink className={burgerNavStyles} to="/contact">
            {t('contact')}
          </NavLink>
        </nav>
        <section className="px-4">
          <div className="flex p-2 px-4 gap-8 justify-between">
            <p className="text-sm uppercase">{t('login')}</p>
            <BiUser className="text-2xl" />
          </div>
          <div className="flex p-4 px-4 gap-8 justify-between border-b">
            <p className="text-sm uppercase">{t('cart')}</p>
            <BsCart3 className="text-2xl" />
          </div>
        </section>
      </div>
      {nav && <Backdrop handleNav={handleNav} />}
    </div>
  );
};

export default Navbar;
