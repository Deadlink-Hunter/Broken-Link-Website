import { useDirection } from '@mantine/core';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useRTLEffect() {
  const { i18n } = useTranslation();
  const { setDirection } = useDirection();
  
  const rtlLanguages = ['ar', 'he', 'heb', 'fa', 'ur'];
  
  useEffect(() => {
    const isRTL = rtlLanguages.includes(i18n.language);
    const direction = isRTL ? 'rtl' : 'ltr';
    
    setDirection(direction);
    document.documentElement.setAttribute('dir', direction);
  }, [i18n.language, setDirection]);
}
