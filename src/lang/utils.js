import English from './dictionaries/en.json';
import Polish from './dictionaries/pl.json';

import { LANGUAGES } from './constants';

/**
 *
 * @param {string} lang
 */
export function getMessages(lang) {
  switch (lang) {
    case LANGUAGES.EN: {
      return English;
    }
    case LANGUAGES.PL: {
      return Polish;
    }
    default: {
      return English;
    }
  }
}
