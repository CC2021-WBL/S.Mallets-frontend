import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('navFooter');

  return (
    <>
      <footer className="h-[27.8rem] w-full bg-[#232323] text-white">
        <div className="container mx-auto flex flex-col-reverse justify-between px-14 pt-14 sm:flex-row sm:px-4 xl:max-w-7xl">
          <div>
            <h2 className="text-base">{t('contactData')}</h2>
            <div className="flex flex-col  leading-[150%]">
              <h4 className="mt-3 sm:mt-8 font-bold"> S.mallets</h4>
              <h4>Tomasz Skrętkowski</h4>
              <a href="tel:+48660748918">Tel: +48 660 748 918</a>
              <a href="mailto:s.mallets.mail@gmail.com">
                E-Mail: s.mallets.mail@gmail.com
              </a>
            </div>
            <a
              href="https://www.facebook.com/skrettomasz"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="mt-8 sm:mt-14 text-2xl" />
            </a>
          </div>

          <div className="mb-8  flex flex-col items-start gap-y-4 sm:items-end sm:gap-y-8">
            <Link to="/product-series" className="first-letter:uppercase">
              {t('products')}
            </Link>
            <Link to="/about-me" className="first-letter:uppercase">
              {t('about')}
            </Link>
            <Link to="/service" className="first-letter:uppercase">
              {t('service')}
            </Link>
            <Link to="/admin">Admin</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
