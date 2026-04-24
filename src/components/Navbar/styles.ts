import { theme } from '@/theme';

export const desktopStyles = {
  container: {
    width: '100%',
    display: 'flex',
    minHeight: '74px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px',
    borderBottom: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
    fontFamily: '"IBM Plex Mono", monospace',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  logoSize: { height: '1.75rem' },
  header: {
    fontWeight: '400',
    fontFamily: '"Share Tech Mono", monospace',
    fontSize: theme.fontSizes.xl,
    marginLeft: '.5rem',
    textTransform: 'uppercase' as const,
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
  },
  linkHoverColor: (isPathMatch: boolean) =>
    isPathMatch
      ? theme.colors.orange[5]
      : 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',

  linkColor: (isPathMatch: boolean) =>
    isPathMatch
      ? theme.colors.orange[5]
      : 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
  linkStyle: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'normal',
    padding: '8px 16px',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    border: '1px solid transparent',
    transition: 'all 0.1s ease',
  },
  button: {
    padding: '.6rem',
    borderRadius: '0px',
    border: `2px solid ${theme.colors.orange[6]}`,
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
    color: theme.colors.orange[6],
  },
  buttonIcon: { marginRight: '1rem' },
  divider: { transform: 'scaleY(.1)' },
  buttonContainers: { display: 'flex', gap: '1rem', alignItems: 'center' },
};

export const mobileStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
    borderBottom: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
  },
  headerContainer: { display: 'flex', alignItems: 'center' },
  header: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'normal',
    fontSize: theme.fontSizes.xl,
    marginLeft: '.5rem',
    textTransform: 'uppercase' as const,
    color: 'light-dark(var(--mantine-color-dark-9), var(--mantine-color-white))',
  },
  logoSize: { height: '1.75rem' },
  burger: { paddingRight: '1.8rem', width: 18, height: 18, color: theme.colors.orange[6] },

  linksContainer: {
    padding: '.6rem',
    backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
  },
  link: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 'normal',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
  },
  linkColor: (isPathMatch: boolean) =>
    isPathMatch
      ? theme.colors.orange[5]
      : 'light-dark(var(--mantine-color-dark-8), var(--mantine-color-dark-2))',
  linkContainer: (isPathMatch: boolean) => ({
    backgroundColor: isPathMatch
      ? 'light-dark(var(--mantine-color-dark-1), var(--mantine-color-dark-8))'
      : 'transparent',
    border: isPathMatch ? `1px solid ${theme.colors.orange[6]}` : '1px solid transparent',
    borderRadius: '0px',
    padding: '.6rem',
    marginBottom: '8px',
  }),
  linksDivider: { marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' },
  buttonContainer: {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  button: {
    margin: '.6rem',
    display: 'block',
    flex: 1,
    borderRadius: '0px',
    border: `2px solid ${theme.colors.orange[6]}`,
  },
  buttonIconColor: (_isDark: boolean) => theme.colors.orange[6],
  buttonText: {
    margin: '0 .8rem',
    fontWeight: '700',
    fontFamily: '"Share Tech Mono", monospace',
    textTransform: 'uppercase',
  },

  navDivider: {
    marginLeft: 'calc(50% - 50vw)',
    marginRight: 'calc(50% - 50vw)',
    transform: 'scaleY(.2)',
  },
  themeToggle: {
    background: 'transparent',
  },
};

export const languageSelectProps = {
  allowDeselect: false,
  variant: 'ghost' as const,
  leftSectionPointerEvents: 'none' as const,
  checkIconPosition: 'right' as const,
  maxDropdownHeight: 200,
  styles: {
    root: {
      width: '8rem',
      border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
      backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
      padding: '4px 8px',
    },
    input: {
      backgroundColor: 'transparent',
      color: 'light-dark(var(--mantine-color-green-6), var(--mantine-color-green-4))',
      fontFamily: '"Share Tech Mono", monospace',
      border: 'none',
      borderRadius: '0px',
      textTransform: 'uppercase',
      fontSize: '14px',
    },
    section: {
      color: 'light-dark(var(--mantine-color-green-6), var(--mantine-color-green-4))',
    },
    dropdown: {
      backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-9))',
      border: '2px solid light-dark(var(--mantine-color-dark-2), var(--mantine-color-dark-4))',
      color: 'light-dark(var(--mantine-color-green-6), var(--mantine-color-green-4))',
      borderRadius: '0px',
      fontFamily: '"Share Tech Mono", monospace',
    },
  },
};
