import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {
    // t,
    i18n,
  } = useTranslation('navFooter');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div>Footer</div>

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
