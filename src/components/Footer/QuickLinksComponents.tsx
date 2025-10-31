import React from 'react';
import { Typography } from '../UI/Typography/Typography';

type QuickLink = {
  labelKey: string;
  href: string;
};

interface QuickLinksProps {
  links: QuickLink[];
  t: (key: string) => string;
}

const QuickLinksComponents: React.FC<QuickLinksProps> = ({ links, t }) => (
  <div className="footer-quicklinks">
    <Typography className="footer-quicklinks-title">
      Quick Links
    </Typography>
    {links.map((link, idx) => (
      <Typography key={link.href + idx}>
        <a className="footer-link" href={link.href}>
          {t(link.labelKey)}
        </a>
      </Typography>
    ))}
  </div>
);

export default QuickLinksComponents;
