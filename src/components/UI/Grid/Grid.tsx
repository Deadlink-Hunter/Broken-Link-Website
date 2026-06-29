import { CSSProperties, ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { gridStyles } from './styles';

interface GridProps {
  children: ReactNode;
  cols?: number;
  mobileCols?: number;
  spacing?: string | number;
  style?: CSSProperties;
}

export const Grid = ({
  children,
  cols = 1,
  mobileCols = 1,
  spacing = '1rem',
  style,
}: GridProps) => {
  const isMobileView = useMediaQuery('(max-width: 1024px)') || false;

  return (
    <div style={{ ...gridStyles.container(cols, mobileCols, isMobileView, spacing), ...style }}>
      {children}
    </div>
  );
};
