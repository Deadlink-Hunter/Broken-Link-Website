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
    backgroundColor: colors.primary[8],
    border: `1px solid ${rgba(colors.primary[2], 0.1)}`,
    padding: '3rem',
    borderRadius: '1.25rem',
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
    color: theme.white,
    fontSize: '1.5rem',
    fontWeight: 700,
  } satisfies CSSProperties,

  cardParagraph: {
    color: colors.primary[2],
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

  pill: {
    backgroundColor: colors.primary[7],
    border: `1px solid ${rgba(colors.primary[3], 0.2)}`,
    padding: '0.4rem 1rem',
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  } satisfies CSSProperties,

  pillText: {
    color: colors.primary[1],
    fontSize: '0.875rem',
    fontWeight: 500,
  } satisfies CSSProperties,

  ctaButton: {
    fontWeight: 700,
  } satisfies CSSProperties,
};
