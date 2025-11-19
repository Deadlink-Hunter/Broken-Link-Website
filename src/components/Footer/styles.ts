import { theme } from '@/theme';

const colors = theme.colors;

export const footerStyles = {
  wrapper: {
    color: colors.gray[2],
    height: '41vh',
    borderTop: `1px solid ${theme.colors.gray[8]}`,
  },
  container: {
    minWidth: '62%',
    marginTop: '3rem',
    padding: '0 1.4rem',
  },
  linkBoxWrapper: {
    paddingBottom: '2rem',
  },
  openSrcTxt: { display: 'flex', alignItems: 'center', gap: '.4rem' },
};
