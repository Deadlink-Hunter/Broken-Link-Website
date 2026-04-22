import { theme } from '@/theme';


export const desktopStyles = {
  container: {
    width: '100%',
    display: 'flex',
    minHeight: '74px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '.45rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  logoSize: { height: '1.75rem' },
  header: { fontWeight: '700', fontSize: theme.fontSizes.lg, marginLeft: '.2rem' },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkHoverColor: (isPathMatch: boolean) =>
    isPathMatch ? theme.colors.cyan[4] : theme.colors.gray[1],

  linkColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.colors.gray[4]),
  linkStyle: {
    fontWeight: 400,
    padding: '.77rem',
    whiteSpace: 'nowrap',
  },
  button: {
    height: '30px',
    borderRadius: theme.radius.sm,
    gap: theme.spacing.sm,
    backgroundColor: 'transparent',
    color: theme.colors.primary[1],
    fontWeight: 400,
    border: `1px solid ${theme.colors.primary[6]}`,
  },
  buttonIcon: { borderRadius: '6px'},
  divider: { transform: 'scaleY(.1)' },
  buttonContainers: { display: 'flex', gap: theme.spacing.lg, alignItems: 'center' },
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
  burger: { paddingRight: '1.8rem', width: 18, height: 18 },

  linksContainer: { padding: '.6rem' },
  link: {
    fontWeight: '700',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
  },
  linkColor: (isPathMatch: boolean) => (isPathMatch ? theme.colors.cyan[4] : theme.colors.gray[7]),
  linkContainer: (isPathMatch: boolean) => ({
    backgroundColor: isPathMatch ? '#1e293b' : 'transparent',
    borderRadius: '8px',
    padding: '.6rem',
  }),
  linksDivider: { marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' },
  buttonContainer: {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '.6rem',
    borderRadius: '4px',
    display: 'block',
    flex: 1,
  },
  buttonIcon: { borderRadius: '6px' },
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

export const languageSelectProps = {
  allowDeselect: false,
  variant: 'ghost' as const,
  leftSectionPointerEvents: 'none' as const,
  checkIconPosition: 'right' as const,
  maxDropdownHeight: 200,
  rightSection: null,
  styles: {
    root: {
      width: '6rem',
    },
    input: {
      backgroundColor: 'transparent',
      color: theme.colors.primary[1],
      border: 'none',
      height: '30px',
    },
    section: {
      color: theme.colors.primary[1],
    },
    dropdown: {
      backgroundColor: theme.colors.primary[6],
      borderColor: theme.colors.primary[5],
      color: theme.colors.primary[0],
    },
  },
};