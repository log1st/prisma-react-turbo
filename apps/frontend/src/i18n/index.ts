import { createInstance } from 'i18next';
import ICU from 'i18next-icu';
import { storage } from '@oapis/common';
import en from './locales/en';
import ru from './locales/ru';

export const i18n = createInstance({
  lng: storage.getItem('language', 'en'),
  supportedLngs: ['en', 'ru'],
  fallbackLng: 'en',
  initImmediate: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en,
    ru,
  },
}).use(ICU);

i18n.on('languageChanged', (newLanguage) => {
  storage.setItem('language', newLanguage);
});
