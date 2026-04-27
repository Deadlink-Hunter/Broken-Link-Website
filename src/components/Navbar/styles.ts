import { theme } from '@/theme';

export const desktopStyles = {
  container: {
    width: '100%',
    display: 'flex',
    minHeight: '4.625rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '.45rem',
    borderBottom: '1px solid light-dark(transparent, var(--mantine-color-primary-6))',
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
    isPathMatch ? theme.colors.cyan[4] : theme.colors.primary[3],

  linkColor: (isPathMatch: boolean) =>
    isPathMatch ? 'var(--mantine-color-cyan-filled)' : 'var(--mantine-color-gray-text)',
  linkStyle: {
    fontWeight: 700,
    padding: '.77rem',
    whiteSpace: 'nowrap',
  },
  button: {
    height: '1.875rem',
    borderRadius: theme.radius.sm,
    gap: theme.spacing.sm,
    color: theme.colors.primary[1],
    fontWeight: 400,
    border: `1px solid ${theme.colors.primary[6]}`,
  },
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
  header: (isScreenXS: boolean) => ({
    fontWeight: '700',
    fontSize: isScreenXS ? theme.fontSizes.sm : theme.fontSizes.xl,
    marginLeft: '.2rem',
  }),
  logoSize: { height: '1.75rem' },
  burger: { width: 18, height: 18, marginLeft: '0.5rem' },

  linksContainer: { padding: '.6rem' },
  link: {
    fontWeight: '700',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
  },
  linkColor: (isPathMatch: boolean) =>
    isPathMatch ? 'var(--mantine-color-cyan-filled)' : 'var(--mantine-color-gray-text)',
  linkContainer: (isPathMatch: boolean) => ({
    backgroundColor: isPathMatch ? theme.colors.primary[6] : 'transparent',
    borderRadius: '0.5rem',
    padding: '.6rem',
  }),
  linksDivider: { marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' },
  buttonContainer: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    margin: '.6rem',
    borderRadius: '0.25rem',
    display: 'block',
    flex: 1,
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
      height: '1.875rem',
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
