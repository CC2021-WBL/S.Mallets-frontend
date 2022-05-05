import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation('navFooter');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <footer className="h-[27.8125rem] w-full bg-[#232323] text-white ">
        <div className="xl container  mx-auto flex justify-between px-[60px] pt-[3.75rem]  sm:px-0">
          <div>
            <h2 className="text-[1.5625rem]">{t('contactData')}</h2>
            <div className="flex flex-col  leading-[150%]">
              <h4 className="mt-[2.3125rem] font-bold"> S.mallets</h4>
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
              <BsFacebook
                style={{ fontSize: '1.5rem' }}
                className="mt-[3.75rem]"
              />
            </a>
          </div>

          <div className="flex  flex-col items-end gap-y-[2rem]">
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

      <div>
        <button type="button" onClick={() => changeLanguage('pl')}>
          pl
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
    </>
  );
};

export default Footer;
