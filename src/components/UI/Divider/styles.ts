import { theme } from "@/theme";

const defaultDividerStyle = {
  margin: theme.spacing.md,
  height: "1px",
};

export const dividerVariants = {
  primary: {
    ...defaultDividerStyle,
    backgroundColor: theme.colors.cyan[5],
  },
  secondary: {
    ...defaultDividerStyle,
    backgroundColor: theme.colors.success[5],
  },
  muted: {
    ...defaultDividerStyle,
    backgroundColor: theme.colors.primary[5],
  },
  border: {
    ...defaultDividerStyle,
    backgroundColor: theme.colors.purple[5],
  },
  accent: {
    ...defaultDividerStyle,
    backgroundColor: theme.colors.primary[5],
  },
  error: {
    ...defaultDividerStyle,
    backgroundColor: theme.colors.error[5],
  },
};
