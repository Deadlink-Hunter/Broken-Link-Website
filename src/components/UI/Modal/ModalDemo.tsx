import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { Group, Text } from '@mantine/core';

export const ModalDemo = () => {
  const [defaultOpened, setDefaultOpened] = useState(false);
  const [primaryOpened, setPrimaryOpened] = useState(false);
  const [centeredOpened, setCenteredOpened] = useState(false);

  return (
    <Group gap="md" p="xl">
      <Button onClick={() => setDefaultOpened(true)}>
        Open Default Modal
      </Button>
      
      <Button onClick={() => setPrimaryOpened(true)} variant="primary">
        Open Primary Modal
      </Button>
      
      <Button onClick={() => setCenteredOpened(true)} variant="secondary">
        Open Centered Modal
      </Button>

      <Modal
        opened={defaultOpened}
        onClose={() => setDefaultOpened(false)}
        title="Default Modal"
      >
        <Text>
          This is a default modal that is fully responsive. Try resizing your browser window 
          to see how it adapts to mobile screens by becoming fullscreen.
        </Text>
      </Modal>

      <Modal
        opened={primaryOpened}
        onClose={() => setPrimaryOpened(false)}
        title="Primary Modal"
        variant="primary"
        size="lg"
      >
        <Text>
          This is a primary variant modal with a larger size. It demonstrates the custom styling
          and responsive behavior of the modal component.
        </Text>
      </Modal>

      <Modal
        opened={centeredOpened}
        onClose={() => setCenteredOpened(false)}
        title="Centered Modal"
        variant="centered"
        centered
      >
        <Text>
          This modal is centered vertically and has custom styling applied through the style prop.
          The component accepts all Mantine Modal props and spreads them properly.
        </Text>
      </Modal>
    </Group>
  );
};
