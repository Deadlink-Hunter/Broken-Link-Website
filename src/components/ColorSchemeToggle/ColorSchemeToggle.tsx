import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { TOGGLE_COLOR_SCHEME } from '../../constants/aria-labels';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      variant="default"
      size="xl"
      aria-label={TOGGLE_COLOR_SCHEME}
    >
      {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoonStars size={20} />}
    </ActionIcon>
  );
}