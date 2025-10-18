import React from "react";
import { Loader as MantineLoader, useMantineTheme } from "@mantine/core";
import { loaderVariants } from "./styles";

type LoaderSize = "small" | "medium" | "large" | "extraLarge";

interface LoaderProps {
  size?: LoaderSize;
  variant?: keyof typeof loaderVariants;
  className?: string;
}
const sizeMapper: Record<LoaderSize, "xs" | "sm" | "md" | "lg" | "xl"> = {
  small: "sm",
  medium: "md",
  large: "lg",
  extraLarge: "xl",
};

export const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  variant = "primary",
  className, 
  ...props
}) => {
  const variantStyle = loaderVariants[variant] || loaderVariants.primary;

  return (
    <div style={{
      color: variantStyle.color,
      minHeight: 60,
    }} className={className}>
      <MantineLoader
        size={sizeMapper[size as LoaderSize]}
        color={variantStyle.color}
        {...props}
      />
    </div>
  );
};
