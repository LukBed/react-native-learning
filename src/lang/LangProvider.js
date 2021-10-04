import React, { createContext, useContext } from 'react';
import { IntlProvider } from 'react-intl';

import { getMessages } from './utils';
import { LANG_CONTEXT_NAME, LANGUAGES } from './constants';

export const LangContext = createContext();
LangContext.displayName = LANG_CONTEXT_NAME;

export function LangModeProvider(props) {
  const [lang, setLang] = React.useState(LANGUAGES.EN);

  /**
   * Switch language
   * @param {string} newLang
   */
  function switchLang(newLang) {
    setLang(newLang);
  }

  const value = [lang, switchLang];

  return <LangContext.Provider value={value} {...props} />;
}

export default function LangWrapper({ children }) {
  const [lang] = useContext(LangContext);

  return (
    <IntlProvider
      locale={lang}
      defaultLocale={LANGUAGES.EN}
      messages={getMessages(lang)}>
      {children}
    </IntlProvider>
  );
}
