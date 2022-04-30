import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';

import i18n from './i18n';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <a href="https://github.com/orgs/CC2021-WBL/">FB</a>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
