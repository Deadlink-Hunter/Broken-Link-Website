import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Divider } from '@mantine/core';
import { LinkButton, LinkTarget } from '../UI/Button/LinkButton';
import { Typography } from '../UI/Typography/Typography';
import { NavbarVariant, NAVIGATION_LINKS } from './Navbar';
import NavbarLink from './NavbarLink';
import { mobileStyles } from './styles';
import { EXTERNAL_LINKS } from '@/constants/links.consts';

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
      <LinkButton href={EXTERNAL_LINKS.GITHUB.REPO} target={LinkTarget.Blank} style={mobileStyles.button}>
        <IconBrandGithub color={mobileStyles.buttonIconColor} size={16} />
        <Typography size='small' style={mobileStyles.buttonText}>
          {t('navbar.githubMobile')}
        </Typography>
      </LinkButton>
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
