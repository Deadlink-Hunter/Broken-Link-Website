import { CSSProperties } from 'react';

export const gridStyles = {
  container: (
    cols: number,
    mobileCols: number,
    isMobileView: boolean,
    spacing: string | number
  ): CSSProperties => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${isMobileView ? mobileCols : cols}, 1fr)`,
    gap: spacing,
  }),
};
