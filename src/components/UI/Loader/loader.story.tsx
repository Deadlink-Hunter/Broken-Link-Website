import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { theme } from '@/theme';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extraLarge'],
      description: 'Loader size',
    },
  },
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByTestId('loader');
    expect(loader).toBeInTheDocument();

    const mantineLoader = loader.firstElementChild as HTMLElement;
    expect(mantineLoader).not.toBeNull();
    const computed = getComputedStyle(mantineLoader);
    expect(computed.width).toBe(computed.height);
    expect(parseFloat(computed.width)).toBeGreaterThan(0);
  },
};

export const CustomStyleLoader: Story = {
  args: {
    size: 'large',
  },
  render: () => <Loader color={theme.colors.orange[3]} />,
};
