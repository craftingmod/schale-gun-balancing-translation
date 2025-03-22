import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  // loads translations from your server
  .use(Backend)
  // load user prefered language
  .use(LanguageDetector)
  // init i18next
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // set to true if you want to see console.log
    debug: false,
    supportedLngs: ['jp', 'en', 'ko'],
    fallbackLng: ['jp'],
    // default language if not found
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .catch((err) => {
    console.log(err);
  });

export default i18n;
