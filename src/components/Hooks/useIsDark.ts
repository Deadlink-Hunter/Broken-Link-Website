import { useComputedColorScheme } from '@mantine/core';

export const useIsDark = (): boolean => {
  const scheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  return scheme === 'dark';
};
