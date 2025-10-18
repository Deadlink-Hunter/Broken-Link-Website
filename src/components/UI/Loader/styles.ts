import { MantineTheme, DEFAULT_THEME } from "@mantine/core";
import { theme } from '@/theme';

const colors = { ...DEFAULT_THEME.colors, ...theme.colors } as Record<string, readonly string[]>;

export const loaderVariants: Record<string, { color: string }> = {
  primary: { color: colors.blue?.[6] ?? colors.indigo?.[6] ?? "#228be6" },
};
