import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { IconArrowRight, IconPhoto } from '@tabler/icons-react';
import { theme } from '@/theme';
import { Button } from './Button';

const BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'outline',
  'ghost',
] as const;

const DISABLE_BUTTON_VARIANTS = ['primary', 'secondary', 'success', 'outline', 'ghost'] as const;

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

async function buttonClick(canvasElement: HTMLElement, buttonName: string) {
  const onClickMock = fn();
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: new RegExp(buttonName, 'i') });

  button.onclick = onClickMock;

  await expect(button).toBeInTheDocument();
  await expect(button).toBeEnabled();
  await userEvent.click(button);
  await expect(onClickMock).toHaveBeenCalledTimes(1);
}

export const button: Story = {
  args: {
    children: 'Click me!',
  },
  play: async ({ canvasElement }) => {
    await buttonClick(canvasElement, 'Click me!');
  },
};

export const buttonWithStyles: Story = {
  args: {
    children: 'Button with custom style',
    style: {
      backgroundColor: 'cyan',
      color: 'white',
      borderRadius: '0.5rem',
      width: '35rem',
    },
  },
  play: async ({ canvasElement }) => {
    await buttonClick(canvasElement, 'Button with custom style');
  },
};

export const buttonWithIcon: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: 'Button with icon',
    variant: 'primary',
    leftSection: <IconPhoto size={14} />,
    rightSection: <IconArrowRight size={14} />,
  },
  play: async ({ canvasElement }) => {
    await buttonClick(canvasElement, 'Button with icon');
  },
};

export const buttonVariantsShowcase: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} variant={variant} onClick={args.onClick}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
        </Button>
      ))}
    </div>
  ),
  args: {
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    await buttonClick(canvasElement, 'Primary Button');
  },
};

export const disabledButtons: Story = {
  args: {
    onClick: fn(),
  },

  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {DISABLE_BUTTON_VARIANTS.map((variant) => (
        <Button key={variant} variant={variant} disabled>
          Disabled {variant}
        </Button>
      ))}
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[0]).toBeDisabled();
    expect(args.onClick).not.toHaveBeenCalled();
  },
};
