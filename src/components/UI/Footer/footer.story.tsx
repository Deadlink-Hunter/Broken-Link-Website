import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
    title: 'UI/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
    argTypes: {
        brandName: {
            control: { type: 'text' },
        },
        brandDescription: {
            control: { type: 'text' },
        },
        githubUrl: {
            control: { type: 'text' },
        },
        madeWithText: {
            control: { type: 'text' },
        },
        copyrightText: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithCustomBrand: Story = {
    args: {
        brandName: 'LinkChecker Pro',
        brandDescription: 'Professional broken link detection and management platform for enterprise websites. Built with modern technologies for reliability.',
        githubUrl: 'https://github.com/linkchecker-pro',
        madeWithText: 'Made with ❤️ by the LinkChecker team',
        copyrightText: '© 2024 LinkChecker Pro. All rights reserved.',
    },
};

export const Minimalist: Story = {
    args: {
        brandName: 'LinkScanner',
        brandDescription: 'Simple and effective broken link scanner for websites.',
        quickLinks: [
            { label: 'Home', href: '/' },
            { label: 'Scanner', href: '/scanner' },
        ],
        communityLinks: [
            { label: 'GitHub', href: '/github' },
            { label: 'Support', href: '/support' },
        ],
        madeWithText: 'Made with ❤️ for developers',
        copyrightText: '© 2024 LinkScanner. Open source.',
    },
};

export const Enterprise: Story = {
    args: {
        brandName: 'Enterprise Link Auditor',
        brandDescription: 'Enterprise-grade broken link detection and compliance management solution. Trusted by Fortune 500 companies worldwide.',
        githubUrl: 'https://github.com/enterprise-linkeditor',
        quickLinks: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Reports', href: '/reports' },
            { label: 'Compliance', href: '/compliance' },
            { label: 'API Documentation', href: '/api-docs' },
            { label: 'Support', href: '/enterprise-support' },
        ],
        communityLinks: [
            { label: 'Enterprise Portal', href: '/enterprise' },
            { label: 'Security', href: '/security' },
            { label: 'SLA', href: '/sla' },
            { label: 'Training', href: '/training' },
        ],
        madeWithText: 'Enterprise solution trusted by leading organizations',
        copyrightText: '© 2024 EnterpriseLink Inc. Proprietary software.',
    },
};
