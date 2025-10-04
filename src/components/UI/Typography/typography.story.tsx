import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { ReactNode } from 'react';

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
  play: ({ canvasElement, args }) => testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
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
  play: ({ canvasElement, args }) => testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};

export const typographyWithBodyText: Story = {
  args: {
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  },
  play: ({ canvasElement, args }) => testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};

export const typographyWithTruncatedText: Story = {
  args: {
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    lineClamp: 1,
  },
  play: ({ canvasElement, args }) => testIfTypographyIsRenderedCorrectly({ canvasElement, args: args as StoryArgs }),
};