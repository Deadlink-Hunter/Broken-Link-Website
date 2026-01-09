import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
import { Divider } from '@mantine/core';
import { Button } from '../UI/Button/Button';
import { Typography } from '../UI/Typography/Typography';
import { NavbarVariant, NAVIGATION_LINKS } from './Navbar';
import NavbarLink from './NavbarLink';
import { mobileStyles } from './styles';

interface NavbarLinksProps {
  variant: NavbarVariant;
  displayLinks?: boolean;
}
interface LinksProps {
  variant: NavbarVariant;
}

function Links({ variant }: LinksProps) {
  return (
    <>
      {NAVIGATION_LINKS.map((link) => (
        <NavbarLink key={link.href} href={link.href} label={link.label} variant={variant} />
      ))}
    </>
  );
}
function MobileGithubBtn() {
  const { t } = useTranslation();
  return (
    <div style={mobileStyles.buttonContainer}>
      <Button style={mobileStyles.button}>
        <IconBrandGithub color={mobileStyles.buttonIconColor} size={16} />
        <Typography size='small' style={mobileStyles.buttonText}>
          {t('navbar.githubMobile')}
        </Typography>
      </Button>
    </div>
  );
}

export default function NavbarLinks({ variant, displayLinks = true }: NavbarLinksProps) {
  if (variant === 'desktop') {
    return <Links variant='desktop' />;
  }
  if (variant === 'mobile' && displayLinks) {
    return (
      <>
        <Links variant='mobile' />
        <Divider variant='muted' style={mobileStyles.linksDivider} />
        <MobileGithubBtn />
      </>
    );
  }
}
