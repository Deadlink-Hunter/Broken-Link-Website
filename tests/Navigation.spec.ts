import { expect, test } from '@playwright/test';

test('clickable and visible', async ({ page }) => {
  await page.goto('/');
  const Navbar = page.getByRole('navigation');

  await expect(Navbar).toBeVisible();

  const NavbarLink = Navbar.getByRole('link', { name: /scanner/i });

  await expect(NavbarLink).toBeVisible();
  await expect(NavbarLink).toBeEnabled();
  await NavbarLink.click();

  await expect(page).toHaveURL(/\/scanner$/);
});
