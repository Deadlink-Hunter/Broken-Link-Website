import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { LanguageSwitcher } from '../components/LanguageSwitcher/LanguageSwitcher';
import { Welcome } from '../components/Welcome/Welcome';
import { Container, Group } from '@mantine/core';

export function HomePage() {
  return (
    <Container>
      <Group justify="flex-end" mt="md">
        <LanguageSwitcher />
      </Group>
      <Welcome />
      <ColorSchemeToggle />
    </Container>
  );
}
