import { IconMoon, IconSun } from '@tabler/icons-react';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { Button } from '../UI/Button/Button';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });

  return (
    <div>
      <Button
        onClick={() => {
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
        }}
      >
        {computedColorScheme === 'light' ? <IconMoon /> : <IconSun />}
      </Button>
    </div>
  );
}
