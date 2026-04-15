export const RTL_I18N_KEYS = new Set<string>(['he']);

export const SUPPORTED_LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'chin', label: '中文' },
  { value: 'he', label: 'עברית' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'it', label: 'Italiana' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'tur', label: 'Türkçe' },
];

export const DEFAULT_LANGUAGE_LABEL = 'English';
export const LANGUAGE_OPTIONS = SUPPORTED_LANGUAGES.map((l) => l.label);
