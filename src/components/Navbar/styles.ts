import { theme } from '@/theme';

export const desktopStyles = {
  container: {
    width: '100%',
    display: 'flex',
    minHeight: '74px',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '.45rem',
  },
  languageSelect: {
    width: '130px',
    margin: '0 0 0 1rem',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  logoSize: { height: '1.75rem' },
  header: { fontWeight: '700', fontSize: theme.fontSizes.xl, marginLeft: '.2rem' },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkHoverColor: (isPathMatch: boolean) =>
    isPathMatch ? theme.colors.cyan[5] : theme.colors.gray[7],

  linkColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.colors.gray[7]),
  linkStyle: {
    fontWeight: 'bold',
    padding: '.77rem',
  },
  button: {
    padding: '.6rem',
    borderRadius: '6px',
  },
  buttonIcon: { marginRight: '1rem' },
  divider: { transform: 'scaleY(.1)' },
  buttonContainers: { display: 'flex', gap: '1rem' },
};

export const mobileStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
  },
  languageSelect: {
    width: '100%',
    maxWidth: '120px',
    margin: '0.5rem 0',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  header: { fontWeight: '700', fontSize: theme.fontSizes.xl, marginLeft: '.2rem' },
  logoSize: { height: '1.75rem' },
  burger: { paddingRight: '1.8rem', width: 18, height: 18 },

  linksContainer: { padding: '.6rem' },
  link: {
    fontWeight: '700',
    fontSize: '1rem',
  },
  linkColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.colors.gray[7]),
  linkContainer: (isPathMatch: boolean) => ({
    backgroundColor: isPathMatch ? '#1e293b' : 'transparent',
    borderRadius: '8px',
    padding: '.6rem',
  }),
  linksDivider: { marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' },
  buttonContainer: { display: 'flex' },
  button: {
    margin: '.6rem',
    display: 'block',
    flex: 1,
    borderRadius: '4px',
  },
  buttonIconColor: (isDark: boolean) => (isDark ? theme.colors.gray[2] : theme.colors.gray[7]),
  buttonText: { margin: '0 .8rem', fontWeight: '700' },

  navDivider: {
    marginLeft: 'calc(50% - 50vw)',
    marginRight: 'calc(50% - 50vw)',
    transform: 'scaleY(.2)',
  },
  themeToggle: {
    backround: 'red',
  },
};
