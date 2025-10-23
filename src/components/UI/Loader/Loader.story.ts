import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

// Extend LoaderProps so Storybook accepts "variant"
interface LoaderProps extends React.ComponentProps<typeof Loader> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "outline" | "ghost";
}

const meta: Meta<LoaderProps> = {
  title: "Components/UI/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "extraLarge"],
      description: "Loader size",
    },
    variant: {
      control: { type: "select" },
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
type Story = StoryObj<LoaderProps>;

export const Default: Story = {
  args: {
    size: "medium",
    variant: "primary",
  },
};
