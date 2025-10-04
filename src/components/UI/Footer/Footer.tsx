import React, { CSSProperties, ReactNode } from 'react';
import { Box } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { footerStyles } from './styles';

interface FooterProps {
    style?: CSSProperties;
    children?: ReactNode;
    brandName?: string;
    brandDescription?: string;
    githubUrl?: string;
    quickLinks?: Array<{ label: string; href: string }>;
    communityLinks?: Array<{ label: string; href: string }>;
    madeWithText?: string;
    copyrightText?: string;
}

export const Footer = ({
    style = {},
    children,
    brandName = 'Deadlink-Hunter',
    brandDescription = 'Open-source tool for finding and eliminating broken links in GitHub repositories. Built with ❤️ for the developer community.',
    githubUrl = 'https://github.com',
    quickLinks = [
        { label: 'About', href: '/about' },
        { label: 'Scanner', href: '/scanner' },
        { label: 'Statistics', href: '/statistics' },
        { label: 'Documentation', href: '/docs' },
    ],
    communityLinks = [
        { label: 'Contribute', href: '/contribute' },
        { label: 'Issues', href: '/issues' },
        { label: 'Feature Requests', href: '/feature-requests' },
        { label: 'Discord', href: '/discord' },
    ],
    madeWithText = 'Made with ❤️ by the open source community',
    copyrightText = `© ${new Date().getFullYear()} Deadlink-Hunter. Licensed under MIT.`
}: FooterProps) => {
    const defaultStyle = footerStyles.default;

    const LinkComponent = ({ label, href }: { label: string; href: string }) => (
        <a
            href={href}
            style={footerStyles.linkItem}
            onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e0e0e0'}
        >
            {label}
        </a>
    );

    return (
        <Box
            component="footer"
            style={{ ...defaultStyle, ...style }}
        >
            {children ? (
                children
            ) : (
                <>
                    {}
                    <div style={footerStyles.mainContainer}>
                        {}
                        <div style={footerStyles.brandSection}>
                            <h3 style={footerStyles.brandTitle}>{brandName}</h3>
                            <p style={footerStyles.brandDescription}>{brandDescription}</p>
                            <a
                                href={githubUrl}
                                style={footerStyles.githubButton}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#374151';
                                    e.currentTarget.style.borderColor = '#6b7280';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.borderColor = '#475569';
                                }}
                            >
                                <IconStar size={16} />
                                Star on GitHub
                            </a>
                        </div>

                        {}
                        <div style={footerStyles.section}>
                            <h4 style={footerStyles.sectionTitle}>Quick Links</h4>
                            <ul style={footerStyles.linkList}>
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <LinkComponent {...link} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {}
                        <div style={footerStyles.section}>
                            <h4 style={footerStyles.sectionTitle}>Community</h4>
                            <ul style={footerStyles.linkList}>
                                {communityLinks.map((link, index) => (
                                    <li key={index}>
                                        <LinkComponent {...link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {}
                    <hr style={footerStyles.separator} />

                    {}
                    <div style={footerStyles.bottomSection}>
                        <p style={footerStyles.bottomText}>
                            {'<> '}{madeWithText}
                        </p>
                        <p style={footerStyles.bottomText}>
                            {copyrightText}
                        </p>
                    </div>
                </>
            )}
        </Box>
    );
};
