import { CSSProperties } from 'react';
import { rgba } from '@mantine/core';
import { theme } from '@/theme';
import { aboutPageStyle } from '../styles';

const colors = theme.colors;

export const communitySectionStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem',
    gap: '1rem',
  } satisfies CSSProperties,

  mainTitle: {
    ...aboutPageStyle.titleStyle,
  } satisfies CSSProperties,

  largeCard: {
    padding: '3rem',
    width: '100%',
    maxWidth: '65.625rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '2rem',
    textAlign: 'left',
    position: 'relative',
  } satisfies CSSProperties,

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '0.5rem',
  } satisfies CSSProperties,

  heartIcon: {
    color: colors.cyan[4],
  } satisfies CSSProperties,

  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
  } satisfies CSSProperties,

  cardParagraph: {
    fontSize: '1.05rem',
    lineHeight: 1.7,
  } satisfies CSSProperties,

  techSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '2rem',
    flexWrap: 'wrap',
    gap: '1.5rem',
  } satisfies CSSProperties,

  techStackGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  } satisfies CSSProperties,

  techLabel: {
    color: colors.primary[3],
    fontSize: '0.875rem',
  } satisfies CSSProperties,

  pillsContainer: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  } satisfies CSSProperties,

  pill: (isDark: boolean): CSSProperties => ({
    backgroundColor: isDark ? colors.primary[7] : colors.gray[1],
    border: `1px solid ${isDark ? rgba(colors.primary[3], 0.2) : colors.gray[3]}`,
    padding: '0.4rem 1rem',
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }),

  pillText: (isDark: boolean): CSSProperties => ({
    color: isDark ? colors.primary[1] : colors.primary[8],
    fontSize: '0.875rem',
    fontWeight: 500,
  }),

  ctaButton: {
    fontWeight: 700,
  } satisfies CSSProperties,
};