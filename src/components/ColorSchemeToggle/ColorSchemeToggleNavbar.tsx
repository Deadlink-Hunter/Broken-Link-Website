import { Button, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useState } from 'react';

export function ColorSchemeToggleNavbar() {
  const { setColorScheme } = useMantineColorScheme();
  const [theme, setButtonTheme] = useState(false);
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  function handleSetButtonTheme() {
    setButtonTheme(!theme)
  }

  return (
    <Group justify='left'>
      <Button onClick={() => {
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        handleSetButtonTheme()
      }}>
        {theme ? <IconMoon/> : <IconSun/>}Change Theme
      </Button>
    </Group>
  );
}
