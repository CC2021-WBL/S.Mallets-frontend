import { I18nextProvider, useTranslation } from 'react-i18next';
import { Suspense } from 'react';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
function App() {
  const { t, i18n } = useTranslation('navFooter');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <h1 className="text-3xl font-bold underline">
          Hello world! {t('account')}
        </h1>
        <a href="https://github.com/orgs/CC2021-WBL/">FB</a>
        <div>
          <button type="button" onClick={() => changeLanguage('pl')}>
            pl
          </button>
          <button type="button" onClick={() => changeLanguage('en')}>
            en
          </button>
        </div>
        <p>{t('account')}</p>
        <p> {t('footer.about')}</p>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
