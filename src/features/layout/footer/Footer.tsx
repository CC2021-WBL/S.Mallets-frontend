import { BsFacebook } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('navAndFooter');

  return (
    <>
      <footer className="w-full bg-[#232323] text-white">
        <div className="mx-auto flex max-w-7xl flex-col-reverse justify-between py-14 px-6 sm:flex-row sm:px-3 md:px-6 lg:px-8">
          <div className="sm:pl-4">
            <h2 className="text-xl">{t('contactData')}</h2>
            <div className="flex flex-col  leading-[150%]">
              <p className="mt-3 font-bold sm:mt-8"> S.mallets</p>
              <p>Tomasz Skrętkowski</p>
              <a href="tel:+48660748918">tel: +48 660 748 918</a>
              <a href="mailto:s.mallets.mail@gmail.com">
                e-mail: s.mallets.mail@gmail.com
              </a>
            </div>
            <div className="flex gap-10">
              <a
                href="https://www.facebook.com/skrettomasz"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook
                  className="mt-8 text-2xl sm:mt-14"
                  role="link"
                  aria-label="Link to fb"
                />
              </a>
              <a href="https://github.com/CC2021-WBL" className="self-end">
                DevsOnTheWaves @2022
              </a>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-start gap-y-4 pr-4 sm:items-end sm:gap-y-8 sm:text-right">
            <NavLink to="/products-series">{t('products')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
            <NavLink to="/service">{t('service')}</NavLink>
            <NavLink to="/contact">{t('contact')}</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
