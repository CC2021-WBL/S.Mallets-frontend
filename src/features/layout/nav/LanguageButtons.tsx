// TODO: find solution of type
const LanguageButtons = (prop: {
  // eslint-disable-next-line no-unused-vars
  changeLanguage: (arg0: any) => void;
  className: string;
  language: string;
}) => {
  return (
    <section className={prop.className}>
      <button
        onClick={() => prop.changeLanguage('pl')}
        className={prop.language === 'pl' ? 'font-bold' : ''}
      >
        PL
      </button>
      <span className="p-2">|</span>
      <button
        onClick={() => prop.changeLanguage('en')}
        className={prop.language === 'en' ? 'font-bold' : ''}
      >
        EN
      </button>
    </section>
  );
};

export default LanguageButtons;
