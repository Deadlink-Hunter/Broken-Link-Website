export const EXTERNAL_LINKS = {
  GITHUB: {
    REPO: 'https://github.com/Deadlink-Hunter/Broken-Link-Website',
    CONTRIBUTE: 'https://github.com/Deadlink-Hunter/Broken-Link-Website/contribute',
    ISSUES: 'https://github.com/Deadlink-Hunter/Broken-Link-Website/issues',
    FEATURE_REQUEST:
      'https://github.com/Deadlink-Hunter/Broken-Link-Website/issues/new?template=feature_request.md',
  },
  DOCUMENTATION: 'https://github.com/memona008/Broken-Link-Website.git',
} as const;

export const NAVIGATION_LINKS = [
  { href: '/', label: 'navbar.home' },
  { href: '/scanner', label: 'navbar.scanner' },
  { href: '/statistics', label: 'navbar.statistics' },
  { href: '/about', label: 'navbar.about' },
] as const;

export const FOOTER_QUICK_LINKS = [
  { href: '/about', label: 'footer.About' },
  { href: '/scanner', label: 'footer.Scanner' },
  { href: '/statistics', label: 'footer.Statistics' },
  { href: EXTERNAL_LINKS.DOCUMENTATION, label: 'footer.Documentation' },
] as const;

export const FOOTER_COMMUNITY_LINKS = [
  { href: EXTERNAL_LINKS.GITHUB.CONTRIBUTE, label: 'footer.Contribute' },
  { href: EXTERNAL_LINKS.GITHUB.ISSUES, label: 'footer.Issues' },
  { href: EXTERNAL_LINKS.GITHUB.FEATURE_REQUEST, label: 'footer.FeatureRequests' },
] as const;
