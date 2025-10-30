import { useState } from 'react';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/Welcome/Welcome';
import { Modal } from '@/components/UI/Modal/Modal';
import { Button } from '@/components/UI/Button/Button';
import { Stack, Text } from '@mantine/core';

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      
      <Stack align="center" p="md">
        <Button onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </Stack>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Test Modal"
      >
        <Text>This is a working modal!</Text>
      </Modal>
    </>
  );
}
