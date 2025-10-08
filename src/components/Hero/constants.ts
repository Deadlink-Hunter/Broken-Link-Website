// Hero component constants
export const HERO_CONSTANTS = {
  TITLE: {
    FIRST_PART: 'Deadlink',
    SECOND_PART: 'Hunter',
  },
  FEATURES: {
    OPEN_SOURCE: 'Open Source',
    LIGHTNING_FAST: 'Lightning Fast',
  },
  DESCRIPTION: {
    MAIN: 'Eliminate broken links from your GitHub repositories with',
    HIGHLIGHT: 'precision scanning',
    CONTINUATION: 'and comprehensive reporting',
  },
  BUTTONS: {
    START_SCANNING: 'Start Scanning',
    VIEW_ON_GITHUB: 'View on GitHub',
  },
  STATISTICS: {
    LINKS_SCANNED: {
      VALUE: '10,000+',
      LABEL: 'Links Scanned',
    },
    REPOS_ANALYZED: {
      VALUE: '500+',
      LABEL: 'Repos Analyzed',
    },
    ACCURACY_RATE: {
      VALUE: '99.9%',
      LABEL: 'Accuracy Rate',
    },
  },
  URLS: {
    GITHUB_REPO: 'https://github.com/Deadlink-Hunter/Broken-Link-Website',
  },
} as const;

// Color constants
export const HERO_COLORS = {
  GRADIENT: {
    PRIMARY: {
      FROM: '#22d3ee',
      TO: '#8b5cf6',
    },
    BACKGROUND: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e1b3a 75%, #0f172a 100%)',
    BUTTON: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
  },
  TEXT: {
    WHITE: 'white',
    LIGHT_GRAY: '#94a3b8',
    DARK_GRAY: '#64748b',
    DIVIDER: '#475569',
  },
  ACCENT: {
    CYAN: '#22d3ee',
    PURPLE: '#8b5cf6',
    GREEN: '#10b981',
  },
  BORDER: 'rgba(148, 163, 184, 0.3)',
} as const;