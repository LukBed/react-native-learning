import React, { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import * as RNLocalize from 'react-native-localize';

import { getMessages } from './utils';
import { LANG_CONTEXT_NAME, LANGUAGES } from './constants';
import { getItem, setItem } from '../utils/asyncStorage';

export const LangContext = createContext();
LangContext.displayName = LANG_CONTEXT_NAME;

const LC_LANG_KEY = 'preferences:lang';

export function LangModeProvider(props) {
  const [lang, setLang] = useState(LANGUAGES.EN);

  useEffect(() => {
    (async function getLanguage() {
      const lcLang = await getItem(LC_LANG_KEY);
      const bestLanguage = RNLocalize.findBestAvailableLanguage(
        Object.values(LANGUAGES),
      );

      if (lcLang) {
        setLang(lcLang);
      } else if (bestLanguage) {
        const { languageTag } = bestLanguage;
        setLang(languageTag);
      } else {
        setLang(LANGUAGES.EN);
      }
    })();
  }, [lang]);

  /**
   * Switch language
   * @param {string} newLang
   */
  async function switchLang(newLang) {
    await setItem(LC_LANG_KEY, newLang);
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
