import { ReactNode } from 'react';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'title', 'subtitle'],
    },
  },
  tags: ['autodocs'],
};
export default meta;

type StoryArgs = {
  children: ReactNode;
  variant?: string;
  component?: string;
  lineClamp?: number;
};

const testIfTypographyIsRenderedCorrectly = async ({
  canvasElement,
  args,
}: {
  canvasElement: HTMLElement;
  args: StoryArgs;
}) => {
  const canvas = within(canvasElement);
  const textContent = typeof args.children === 'string' ? args.children : '';
  const component = await canvas.findByText(textContent);
  await expect(component).toBeInTheDocument();
};

type Story = StoryObj<StoryArgs>;

export const typography: Story = {
  args: {
    children: 'Hello World!',
    variant: 'success',
  },
  play: ({ canvasElement, args }) =>
    testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};

export const typographyWithChildren: Story = {
  args: {
    children: <h1>Hello World!</h1>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: /hello world/i });
    await expect(heading).toBeInTheDocument();
  },
};

export const typographyWithVariant: Story = {
  args: {
    children: 'Hello World!',
    variant: 'title',
    component: 'h1',
  },
  play: ({ canvasElement, args }) =>
    testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};

export const typographyWithBodyText: Story = {
  args: {
    children:
      'lorm ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  play: ({ canvasElement, args }) =>
    testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};

export const typographyWithTruncatedText: Story = {
  args: {
    children:
      'lorn ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    lineClamp: 1,
  },
  play: ({ canvasElement, args }) =>
    testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};
