import { RTL_I18N_KEYS } from '@/constants/languages';

export function syncDocumentLanguage(lng: string) {
  document.documentElement.dir = RTL_I18N_KEYS.has(lng) ? 'rtl' : 'ltr';
}
