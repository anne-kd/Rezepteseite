import { newE2EPage } from '@stencil/core/testing';

describe('sidebar-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sidebar-list-item></sidebar-list-item>');

    const element = await page.find('sidebar-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
