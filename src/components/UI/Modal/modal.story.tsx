import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = (args: any) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal {...args} opened={opened} onClose={() => setOpened(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Default Modal',
    children: 'This is the default modal content.',
  },
};

export const Primary: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Primary Modal',
    variant: 'primary',
    children: 'This is a primary variant modal.',
  },
};

export const Secondary: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Secondary Modal',
    variant: 'secondary',
    children: 'This is a secondary variant modal.',
  },
};

export const Success: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Success Modal',
    variant: 'success',
    children: 'This is a success variant modal.',
  },
};

export const Warning: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Warning Modal',
    variant: 'warning',
    children: 'This is a warning variant modal.',
  },
};

export const Error: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Error Modal',
    variant: 'error',
    children: 'This is an error variant modal.',
  },
};

export const Centered: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Centered Modal',
    centered: true,
    children: 'This modal is centered vertically.',
  },
};

export const WithCustomStyle: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Custom Styled Modal',
    variant: 'custom',
    children: 'This modal has custom styling applied.',
  },
};

export const LargeSize: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    size: 'lg',
    children: 'This is a large modal with more content space.',
  },
};
