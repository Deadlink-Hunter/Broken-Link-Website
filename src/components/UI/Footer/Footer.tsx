import React from "react";
import { IconStar } from "@tabler/icons-react";
import "./Footer.css";


interface LinkItem {
    label: string;
    href: string;
}

interface FooterProps {
    brandName?: string;
    brandDescription?: string;
    githubUrl?: string;
    quickLinks?: LinkItem[];
    communityLinks?: LinkItem[];
    madeWithText?: string;
    copyrightText?: string;
}

export const Footer: React.FC<FooterProps> = ({
    brandName = "Deadlink-Hunter",
    brandDescription = "Open-source tool for finding and eliminating broken links in GitHub repositories. Built with ❤️ for the developer community.",
    githubUrl = "https://github.com",
    quickLinks = [
        { label: "About", href: "/about" },
        { label: "Scanner", href: "/scanner" },
        { label: "Statistics", href: "/statistics" },
        { label: "Documentation", href: "/docs" },
    ],
    communityLinks = [
        { label: "Contribute", href: "/contribute" },
        { label: "Issues", href: "/issues" },
        { label: "Feature Requests", href: "/feature-requests" },
        { label: "Discord", href: "/discord" },
    ],
    madeWithText = "Made with ❤️ by the open source community",
    copyrightText = `© ${new Date().getFullYear()} Deadlink-Hunter. Licensed under MIT.`,
}) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h3>{brandName}</h3>
                    <p>{brandDescription}</p>
                    <a href={githubUrl} className="footer-github-btn">
                        <IconStar size={16} /> Star on GitHub
                    </a>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Community Links */}
                <div className="footer-section">
                    <h4>Community</h4>
                    <ul>
                        {communityLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>{madeWithText}</p>
                <p>{copyrightText}</p>
            </div>
        </footer>
    );
};
