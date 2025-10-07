import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button, Text, Group, Stack, Title } from '@mantine/core';
import { Modal } from './Modal';

const ModalWrapper = ({ children, buttonText = 'Open Modal', ...props }: any) => {
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpened(true)}>{buttonText}</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props}>
        {children}
      </Modal>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  title: 'Components/UI/Modal',
  component: ModalWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'large', 'compact', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    centered: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Modal Title',
    children: (
      <Stack>
        <Text>This is a basic modal with default styling.</Text>
        <Text size="sm" c="dimmed">
          The modal is responsive and will adapt to mobile screens automatically.
        </Text>
      </Stack>
    ),
  },
};

export const Large: Story = {
  args: {
    title: 'Large Modal',
    variant: 'large',
    size: 'lg',
    children: (
      <Stack>
        <Text>This is a large modal with enhanced styling.</Text>
        <Text>It has a bigger border radius and enhanced shadow for better visual impact.</Text>
        <Group justify="flex-end" mt="md">
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </Group>
      </Stack>
    ),
  },
};

export const Success: Story = {
  args: {
    title: 'Success Modal',
    variant: 'success',
    children: (
      <Stack>
        <Text>✅ Operation completed successfully!</Text>
        <Text size="sm" c="dimmed">
          Your changes have been saved and applied.
        </Text>
      </Stack>
    ),
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning Modal',
    variant: 'warning',
    children: (
      <Stack>
        <Text>⚠️ Are you sure you want to proceed?</Text>
        <Text size="sm" c="dimmed">
          This action cannot be undone. Please review before continuing.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="outline">Cancel</Button>
          <Button color="orange">Continue</Button>
        </Group>
      </Stack>
    ),
  },
};

export const Error: Story = {
  args: {
    title: 'Error Modal',
    variant: 'error',
    children: (
      <Stack>
        <Text>❌ Something went wrong</Text>
        <Text size="sm" c="dimmed">
          Please try again or contact support if the problem persists.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button>Try Again</Button>
        </Group>
      </Stack>
    ),
  },
};

export const MobileResponsive: Story = {
  args: {
    title: 'Mobile Responsive Modal',
    children: (
      <Stack>
        <Text>This modal is optimized for mobile devices.</Text>
        <Text size="sm" c="dimmed">
          Try viewing this on different screen sizes to see the responsive behavior:
        </Text>
        <ul>
          <li>Reduced margins on mobile</li>
          <li>Adjusted padding for better touch interaction</li>
          <li>Maximum height constraints for small screens</li>
        </ul>
      </Stack>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
