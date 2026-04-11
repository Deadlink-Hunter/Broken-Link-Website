import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { typographyVariants } from '../Typography/styles';
import { ColoredTitle } from './ColoredTitle';

const VARIANTS = Object.keys(typographyVariants);

const meta: Meta<typeof ColoredTitle> = {
  title: 'Components/UI/ColoredTitle',
  component: ColoredTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    text: 'Explore our Toolkit today',
    highlight: 'Toolkit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Toolkit')).toBeInTheDocument();
  },
};

export const highlightAtStart: Story = {
  args: {
    text: 'Toolkit for everyone',
    highlight: 'Toolkit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Toolkit')).toBeInTheDocument();
  },
};

export const highlightAtEnd: Story = {
  args: {
    text: 'Explore our Toolkit',
    highlight: 'Toolkit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Toolkit')).toBeInTheDocument();
  },
};

export const variantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {VARIANTS.map((variant) => (
        <ColoredTitle
          key={variant}
          text={`This is ${variant} variant`}
          highlight={variant}
          variant={variant}
        />
      ))}
    </div>
  ),
};
