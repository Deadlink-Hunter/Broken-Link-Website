import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { Welcome } from '@/components/Welcome/Welcome';
import { Group } from '@mantine/core';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Group justify="center" mt="xl" gap="md">
        <ColorSchemeToggle />
        <LanguageSwitcher />
      </Group>
    </>
  );
}
