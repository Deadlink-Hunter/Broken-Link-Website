import React from 'react';
import { Button } from '../UI/Button/Button';
import { Typography } from '../UI/Typography/Typography';
import { quickLinks } from './quickLinks';
import { HREFS } from '../../constants/links';
import { useTranslation } from 'react-i18next';
import QuickLinksComponents from './QuickLinksComponents';
import './Footer.css';

const communityLinks = [
  { labelKey: 'links.contribute', href: HREFS.contribute },
  { labelKey: 'links.issues', href: HREFS.issues },
  { labelKey: 'links.featureRequests', href: HREFS.featureRequests },
  { labelKey: 'links.discord', href: HREFS.discord },
];

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-brand">
          <Typography className="footer-title">
            Deadlink-Hunter
          </Typography>
          <Typography className="footer-description">
            Open-source tool for finding and eliminating broken links in GitHub repositories.
            Built with <span style={{ color: "#e63946" }}>♥</span> for the developer community.
          </Typography>
          <a
            href="https://github.com/Deadlink-Hunter/Broken-Link-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="footer-link-btn">
              Star on GitHub
            </Button>
          </a>
        </div>

        <QuickLinksComponents links={quickLinks} t={t} />

        <div className="footer-community">
          <Typography className="footer-community-title">
            Community
          </Typography>
          {communityLinks.map(link => (
            <Typography key={link.href}>
              <a className="footer-community-link" href={link.href}>
                {t(link.labelKey)}
              </a>
            </Typography>
          ))}
        </div>
      </div>
      <div className="footer-bottombar">
        <span>
          {'<>'} Made with <span style={{ color: "#e63946" }}>♥</span> by the open source community
        </span>
        <span>
          © 2024 Deadlink-Hunter. Licensed under MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
