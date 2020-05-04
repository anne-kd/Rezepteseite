import { newE2EPage } from '@stencil/core/testing';

describe('recipe-overview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<recipe-overview></recipe-overview>');

    const element = await page.find('recipe-overview');
    expect(element).toHaveClass('hydrated');
  });
});
