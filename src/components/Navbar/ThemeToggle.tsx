import { useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { Button } from '../UI/Button/Button';

export function ThemeToggle() {
  const enum colorSchemes {
    Light = 'light',
    Dark = 'dark',
  }
  const { setColorScheme } = useMantineColorScheme();
  const [theme, setButtonTheme] = useState(false);
  const computedColorScheme = useComputedColorScheme(colorSchemes.Light, {
    getInitialValueInEffect: true,
  });

  function handleThemeButtonClicked() {
    setButtonTheme(!theme);
  }

  return (
    <div>
      <Button
        onClick={() => {
          setColorScheme(
            computedColorScheme === colorSchemes.Light ? colorSchemes.Dark : colorSchemes.Light
          );
          handleThemeButtonClicked();
        }}
      >
        {theme ? <IconMoon /> : <IconSun />}
      </Button>
    </div>
  );
}
