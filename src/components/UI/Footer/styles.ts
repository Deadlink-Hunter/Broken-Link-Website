import { theme } from '@/theme';

const colors = theme.colors as Record<string, readonly string[]>;

export const footerStyles = {
    default: {
        backgroundColor: '#1a1b2c',
        padding: '3rem 1rem',
        marginTop: 'auto',
    },
    mainContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem',
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gap: '2rem',
        },
    },
    brandSection: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    },
    brandTitle: {
        color: '#06b6d4',
        fontSize: '1.5rem',
        fontWeight: '700',
        margin: 0,
    },
    brandDescription: {
        color: '#e0e0e0',
        fontSize: '0.9rem',
        lineHeight: '1.5',
        margin: 0,
    },
    githubButton: {
        backgroundColor: 'transparent',
        border: `1px solid ${colors.primary[3]}`,
        borderRadius: '8px',
        padding: '8px 16px',
        color: '#ffffff',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.2s ease',
        width: 'fit-content',
        textDecoration: 'none',
    },
    section: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    },
    sectionTitle: {
        color: '#e0e0e0',
        fontSize: '1rem',
        fontWeight: '600',
        margin: 0,
    },
    linkList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
    },
    linkItem: {
        color: '#e0e0e0',
        textDecoration: 'none',
        fontSize: '0.875rem',
        transition: 'color 0.2s ease',
    },
    separator: {
        border: 'none',
        height: '1px',
        backgroundColor: colors.primary[5],
        margin: '2rem 0',
    },
    bottomSection: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: '1rem',
    },
    bottomText: {
        color: '#e0e0e0',
        fontSize: '0.75rem',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
    },
};
