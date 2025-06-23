import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Resources' }).click();
  //await page.locator('a.nav-link:has-text("Resources")').click(), // esto se hace para  utilizar has text (combinar ccs y text) adicional esta es la maner clasica de la linea de arriba
  await page.getByRole('link', { name: 'Home' }).click();
  //await page.locator('a.nav-link:has-text("Home")').click(), // otro ejemplo de has text
  await page.getByText('Quality is not an act, it is').click();
  //await page.locator('text=Quality is not an act, it is').click();  //(esta es la forma antigua que se usaba para usar el getByText
  await page.getByRole('link', { name: 'Click' }).click();
  await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});