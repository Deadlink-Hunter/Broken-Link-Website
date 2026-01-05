import { useMantineColorScheme } from '@mantine/core';

export const useIsDark = (): boolean => {
  const { colorScheme } = useMantineColorScheme();
  return colorScheme === 'dark';
};
