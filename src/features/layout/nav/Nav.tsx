import toast from 'react-hot-toast';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Backdrop from './Backdrop';
import LanguageButtons from './LanguageButtons';
import NavBar from './NavBar';
import logo from '../../../assets/s-logo.svg';
import { RootState } from '../../../app/store';
import { activeLogCart, navBurgerStyles, navStyles } from './navStyles';
import { authActions } from '../../loginPage/authSlice';
import { userActions } from '../../userPage/userSlice';

const Nav = () => {
  const { t, i18n } = useTranslation('navAndFooter');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    document.documentElement.lang = lng;
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const logoutHandler = () => {
    const toastId = toast.loading('Loading...');

    dispatch(authActions.logout());
    dispatch(userActions.userLogout());

    toast.success(t('toastOut'), {
      id: toastId,
    });
    if (localStorage.getItem('auth')) {
      localStorage.removeItem('auth');
    }
    navigate('/');
    return;
  };

  const cart = useSelector((state: RootState) => {
    return { ...state.cart };
  });

  return (
    <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between sm:h-36 sm:px-3 md:h-44 md:px-6 lg:px-8">
      <div
        className={
          !nav ? 'w-36 p-6 sm:w-48 sm:p-3 md:w-64  lg:w-72 lg:p-4' : 'hidden'
        }
      >
        <NavLink to="/">
          <img src={logo} alt="smallets logo" width="100%" height="100%" />
        </NavLink>
      </div>
      <section className="hidden sm:block">
        <div className="flex justify-end gap-8 p-4 pl-8 text-2xl">
          {isAuth && (
            <button onClick={logoutHandler} className="text-xs">
              {t('logout')}
            </button>
          )}
          <NavLink
            to={isAuth ? '/user' : '/login'}
            aria-label="login"
            className={({ isActive }) =>
              isActive ? `${activeLogCart}` : undefined
            }
          >
            <BiUser />
          </NavLink>
          <NavLink
            to="/cart"
            aria-label="cart"
            className={({ isActive }) =>
              isActive ? `${activeLogCart}` : `relative`
            }
          >
            <BsCart3 />
            {cart.counter > 0 && (
              <div className="absolute -bottom-3 -right-4 z-50 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white">
                <p className="text-xs">{cart.counter}</p>
              </div>
            )}
          </NavLink>

          <LanguageButtons
            changeLanguage={changeLanguage}
            className={'text-sm'}
            language={i18n.language}
          />
        </div>
        <nav className="hidden tracking-wider sm:flex">
          <NavBar t={t} className={navStyles} />
        </nav>
      </section>
      <div
        onClick={handleNav}
        className="absolute right-7 top-7 z-50 block cursor-pointer sm:hidden"
        aria-hidden="true"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <aside
        className={
          nav
            ? 'menu border-r-grey-900 fixed left-0 top-0 z-50 h-full w-3/5 border-r bg-white duration-500 ease-in-out '
            : 'fixed left-[-100%]'
        }
      >
        <header className="flex items-center justify-between pl-6">
          <h1 className="text-2xl font-semibold tracking-wider">Menu</h1>
          <LanguageButtons
            changeLanguage={changeLanguage}
            className="p-6 text-sm"
            language={i18n.language}
          />
        </header>

        <nav className="z-50 flex flex-col p-4 tracking-wider">
          <NavBar t={t} className={navBurgerStyles} handleNav={handleNav} />
          {isAuth && (
            <NavLink
              to="/user"
              key="user"
              onClick={handleNav}
              className={({ isActive }) =>
                isActive
                  ? `${navBurgerStyles} font-medium sm:scale-110 md:scale-125`
                  : navBurgerStyles
              }
            >
              {t('user')}
            </NavLink>
          )}
        </nav>
        <section className="px-4">
          <NavLink
            className="flex w-full justify-between gap-8 p-2 px-4 hover:underline"
            to={isAuth ? '/user' : '/login'}
            onClick={() => {
              handleNav();
              {
                isAuth && logoutHandler();
              }
            }}
          >
            <p className="text-sm tracking-wider">
              {isAuth ? t('logout') : t('login')}
            </p>
            <BiUser className="text-2xl" />
          </NavLink>
          <NavLink
            className="flex w-full justify-between gap-8 border-b p-4 px-4 hover:underline"
            to="/cart"
            onClick={handleNav}
          >
            <p className="text-sm tracking-wider">{t('cart')}</p>
            <BsCart3 className="text-2xl" />
          </NavLink>
        </section>
      </aside>
      {nav && <Backdrop handleClose={handleNav} />}
    </div>
  );
};

export default Nav;
