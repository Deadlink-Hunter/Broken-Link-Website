import React from "react";
import { Loader as MantineLoader, useMantineTheme } from "@mantine/core";
import { useStyles, loaderVariants } from "./styles";

interface LoaderProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: keyof ReturnType<typeof loaderVariants>;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "md",
  variant = "primary",
  className,
  ...props
}) => {
  const theme = useMantineTheme();
  const styles = useStyles();
  const variants = loaderVariants(theme);
  const variantStyle = variants[variant] || variants.primary;

  return (
    <div style={{ ...styles.loaderWrapper, ...variantStyle }} className={className}>
      <MantineLoader size={size} color={variantStyle.color} {...props} />
    </div>
  );
};
