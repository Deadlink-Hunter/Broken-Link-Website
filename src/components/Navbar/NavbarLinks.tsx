import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Divider } from '@mantine/core';
import { LinkButton, LinkTarget } from '../UI/Button/LinkButton';
import { Typography } from '../UI/Typography/Typography';
import { NavbarVariant } from './Navbar';
import NavbarLink from './NavbarLink';
import { mobileStyles } from './styles';
import { useNavigationLinks } from '@/components/Hooks/useNavigationLinks';

interface NavbarLinksProps {
  variant: NavbarVariant;
  displayLinks?: boolean;
}
interface LinksProps {
  variant: NavbarVariant;
}

function Links({ variant }: LinksProps) {
  const { navigationLinks } = useNavigationLinks();

  return (
    <>
      {navigationLinks.map((link) => (
        <NavbarLink key={link.href} href={link.href} label={link.label} variant={variant} />
      ))}
    </>
  );
}
function MobileGithubBtn() {
  const { externalLinks } = useNavigationLinks();
  const { t } = useTranslation();
  return (
    <div style={mobileStyles.buttonContainer}>
      <LinkButton href={externalLinks.GITHUB.REPO} target={LinkTarget.Blank} style={mobileStyles.button}>
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
