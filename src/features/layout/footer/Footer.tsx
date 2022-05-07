import { BsFacebook } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('navFooter');

  return (
    <>
      <footer className="h-fit w-full bg-[#232323] text-white">
        <div className=" sm:px-3 md:px-6 lg:px-8 mx-auto flex flex-col-reverse justify-between p-14 sm:flex-row max-w-7xl ">
          <div>
            <h2 className="text-xl">{t('contactData')}</h2>
            <div className="flex flex-col  leading-[150%]">
              <p className="mt-3 sm:mt-8 font-bold"> S.mallets</p>
              <p>Tomasz Skrętkowski</p>
              <a href="tel:+48660748918">tel: +48 660 748 918</a>
              <a href="mailto:s.mallets.mail@gmail.com">
                e-mail: s.mallets.mail@gmail.com
              </a>
            </div>
            <a
              href="https://www.facebook.com/skrettomasz"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook
                className="mt-8 sm:mt-14 text-2xl"
                role="link"
                aria-label="Link to fb"
              />
            </a>
          </div>

          <div className="mb-8  flex flex-col items-start gap-y-4 sm:items-end sm:text-right sm:gap-y-8">
            <NavLink to="/product-series">{t('products')}</NavLink>
            <NavLink to="/about-me">{t('about')}</NavLink>
            <NavLink to="/service">{t('service')}</NavLink>
            <NavLink to="/contact">{t('contact')}</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
