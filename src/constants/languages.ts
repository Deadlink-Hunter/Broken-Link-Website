export const RTL_I18N_KEYS = new Set<string>(['he']);

export const SUPPORTED_LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'he', label: 'עברית' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ptbr', label: 'Portuguese' },
  { value: 'it', label: 'Italian' },
  { value: 'nl', label: 'Dutch' },
  { value: 'tur', label: 'Türkçe' },
];

export const DEFAULT_LANGUAGE_LABEL = 'English';
export const LANGUAGE_OPTIONS = SUPPORTED_LANGUAGES.map((l) => l.label);
