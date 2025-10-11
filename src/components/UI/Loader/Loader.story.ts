import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "UI/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Loader size",
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "outline",
        "ghost",
      ],
      description: "Visual style variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

// Default example
export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
  },
};

// Variant demos
export const Secondary: Story = {
  args: {
    size: "md",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    size: "md",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    size: "md",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    size: "md",
    variant: "error",
  },
};

export const Outline: Story = {
  args: {
    size: "md",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    size: "md",
    variant: "ghost",
  },
};
