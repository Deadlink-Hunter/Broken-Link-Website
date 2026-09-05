import { LANGUAGE_OPTIONS, SUPPORTED_LANGUAGES } from './languages';

const EXPECTED_NATIVE_LABELS: Record<string, string> = {
  en: 'English',
  chin: '中文',
  he: 'עברית',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  nl: 'Nederlands',
  tur: 'Türkçe',
  ptbr: 'Português',
};

describe('SUPPORTED_LANGUAGES', () => {
  it('shows each language name in its native form (endonym)', () => {
    for (const { value, label } of SUPPORTED_LANGUAGES) {
      expect(label).toBe(EXPECTED_NATIVE_LABELS[value]);
    }
  });

  it('has unique labels so selection cannot collide', () => {
    expect(new Set(LANGUAGE_OPTIONS).size).toBe(LANGUAGE_OPTIONS.length);
  });
});
