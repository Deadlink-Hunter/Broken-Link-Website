import { useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { Button } from '../UI/Button/Button';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [theme, setButtonTheme] = useState(false);
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  function handleThemeButtonClicked() {
    setButtonTheme(!theme);
  }

  return (
    <div>
      <Button
        onClick={() => {
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
          handleThemeButtonClicked();
        }}
      >
        {theme ? <IconMoon /> : <IconSun />}
      </Button>
    </div>
  );
}
