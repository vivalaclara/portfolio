
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translate/en/translation.json';
import translationPT from './translate/pt/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pt: { translation: translationPT }
    },
    lng: 'pt', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
