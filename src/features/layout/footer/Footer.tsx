import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation('navFooter');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div>{t('about')}</div>
      <Link to="about-us">{t('about')}</Link>
      <Link to="contact">{t('contact')}</Link>
      <Link to="admin">{t('products')}</Link>
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
