import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

const storyContainerStyle = {
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
} satisfies React.CSSProperties;

const actionRowStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
} satisfies React.CSSProperties;

const meta: Meta<typeof Modal> = {
  title: 'Components/UI/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithToggle = (props: Partial<React.ComponentProps<typeof Modal>>) => {
  const [opened, setOpened] = useState(false);
  return (
    <div style={storyContainerStyle}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
};

export const TopAligned: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows Mantines default modal placement near the top of the viewport.',
      },
    },
  },
  render: () => (
    <ModalWithToggle title='Top Aligned Modal' fullScreen={false}>
      This example uses Mantine's default vertical placement near the top of the viewport.
    </ModalWithToggle>
  ),
};

export const Centered: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Uses the centered prop to vertically center the modal in the viewport.',
      },
    },
  },
  render: () => (
    <ModalWithToggle title='Centered Modal' fullScreen={false} centered>
      This example centers the modal vertically and horizontally.
    </ModalWithToggle>
  ),
};

export const OffsetFromTop: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how yOffset changes the modals distance from the top edge.',
      },
    },
  },
  render: () => (
    <ModalWithToggle title='Offset Modal' fullScreen={false} yOffset='12vh'>
      This example pushes the modal farther down from the top with a custom yOffset.
    </ModalWithToggle>
  ),
};

export const LargeSize: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows a larger modal width while keeping the dialog centered.',
      },
    },
  },
  render: () => (
    <ModalWithToggle title='Large Modal' size='xl' fullScreen={false} centered>
      This modal uses the large size variant.
    </ModalWithToggle>
  ),
};

export const ResponsiveDefault: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Keeps the wrapper default behavior, so the modal becomes full screen in narrow viewports.',
      },
    },
  },
  render: () => (
    <ModalWithToggle title='Responsive Default Modal'>
      This story keeps the wrapper default, so it becomes full screen in narrow viewports.
    </ModalWithToggle>
  ),
};

export const ForceFullScreen: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Forces full-screen mode regardless of viewport width.',
      },
    },
  },
  render: () => (
    <ModalWithToggle title='Full Screen Modal' fullScreen>
      This modal is full screen regardless of screen size.
    </ModalWithToggle>
  ),
};

export const WithCustomStyle: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Applies custom content styling through the wrappers contentStyle prop.',
      },
    },
  },
  render: () => (
    <ModalWithToggle
      title='Styled Content Modal'
      fullScreen={false}
      centered
      contentStyle={{ backgroundColor: '#21213a', border: '2px solid #06b6d4', color: '#f8fafc' }}
    >
      This example styles the modal content surface with the wrapper's contentStyle prop.
    </ModalWithToggle>
  ),
};

export const WithActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows a realistic confirmation dialog layout with action buttons.',
      },
    },
  },
  render: () => {
    const ModalWithActions = () => {
      const [opened, setOpened] = useState(false);
      return (
        <div style={storyContainerStyle}>
          <Button onClick={() => setOpened(true)}>Open Modal</Button>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title='Confirm Action'
            fullScreen={false}
            centered
          >
            <p>Are you sure you want to proceed?</p>
            <div style={actionRowStyle}>
              <Button variant='error' onClick={() => setOpened(false)}>
                Cancel
              </Button>
              <Button variant='success' onClick={() => setOpened(false)}>
                Confirm
              </Button>
            </div>
          </Modal>
        </div>
      );
    };
    return <ModalWithActions />;
  },
};
