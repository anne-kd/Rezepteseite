import { newE2EPage } from '@stencil/core/testing';

describe('list-multiplicator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-multiplicator></list-multiplicator>');

    const element = await page.find('list-multiplicator');
    expect(element).toHaveClass('hydrated');
  });
});
