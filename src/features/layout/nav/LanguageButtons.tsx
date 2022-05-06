// TODO: find solution of type
const LanguageButtons = (
  // eslint-disable-next-line no-unused-vars
  prop: { changeLanguage: (arg0: any) => void; className: string },
) => {
  return (
    <section className={prop.className}>
      <button onClick={() => prop.changeLanguage('pl')}>PL</button>
      <span className="p-2">|</span>
      <button onClick={() => prop.changeLanguage('en')}>EN</button>
    </section>
  );
};

export default LanguageButtons;
