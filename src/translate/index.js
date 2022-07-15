import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {memoize} from 'lodash';
import {I18nManager} from 'react-native';

import vn from './vn.json';

const translationGetters = {
  vn,
};

const setI18nConfig = lang => {
  const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
  );
  const fallback = {languageTag: 'vn', isRTL: false};
  let {languageTag, isRTL} = fallback;
  // RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  // fallback;
  if (lang) {
    languageTag = lang;
  }
  translate.cache.clear();
  I18nManager.forceRTL(isRTL);

  i18n.translations = {[languageTag]: translationGetters[languageTag]};
  i18n.locale = languageTag;
  i18n.translate = translate;
};

export const addHandleLocaleChange = func =>
  RNLocalize.addEventListener('change', func);
export const removeHandleLocaleChange = func =>
  RNLocalize.removeEventListener('change', func);
export const translate = text => i18n.t(text);

export default setI18nConfig;
