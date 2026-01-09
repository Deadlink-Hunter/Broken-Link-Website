import { Button, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggleNavbar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify='left'>
      <Button onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </Button>
    </Group>
  );
}
