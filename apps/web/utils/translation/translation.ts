import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import resources from './languages'

const options = {
  order: ['querystring', 'localStorage', 'sessionStorage', 'path', 'navigator'],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
}
i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
  detection: options,
})

export default i18n
