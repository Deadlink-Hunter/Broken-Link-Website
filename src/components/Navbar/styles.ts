import { theme } from '@/theme';

export const desktopStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.6rem 0',
  },
  innerContainer: {
    width: '100%',
    maxWidth: '1210px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '.45rem',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  logoSize: { height: '1.75rem' },
  header: { fontWeight: '700', fontSize: theme.fontSizes.xl, marginLeft: '.2rem' },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkHoverColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.white),
  linkColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.colors.gray[2]),
  linkStyle: {
    fontWeight: 'bold',
    padding: '.77rem',
  },
  button: {
    color: theme.colors.gray[2],
    backgroundColor: 'white',
    padding: '.6rem',
    borderRadius: '6px',
  },
  buttonIcon: { marginRight: '1rem' },
  divider: { transform: 'scaleY(.1)' },
};

export const mobileStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  header: { fontWeight: '700', fontSize: theme.fontSizes.xl, marginLeft: '.2rem' },
  logoSize: { height: '1.75rem' },
  burger: { paddingRight: '1.8rem' },
  burgerSize: 18,
  linksContainer: { padding: '.6rem' },
  link: {
    fontWeight: '700',
    fontSize: '1rem',
  },
  linkColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.white),
  linkContainer: (isPathMatch: boolean) => ({
    // backgroundColor exists in theme but not reachable through it (its the seventh color under primary colors array )
    backgroundColor: isPathMatch ? '#1e293b' : 'transparent',
    borderRadius: '8px',
    padding: '.6rem',
  }),
  linksDivider: { marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' },
  buttonContainer: { display: 'flex' },
  button: {
    backgroundColor: 'white',
    margin: '.6rem',
    display: 'block',
    flex: 1,
    borderRadius: '4px',
  },
  buttonIconColor: theme.colors.gray[2],
  buttonText: { margin: '0 .8rem', color: theme.colors.gray[2], fontWeight: '700' },
  buttonTextSize: 'small' as const,
  navDivider: {
    marginLeft: 'calc(50% - 50vw)',
    marginRight: 'calc(50% - 50vw)',
    transform: 'scaleY(.2)',
  },
  dividerVariant: 'muted' as const,
};
