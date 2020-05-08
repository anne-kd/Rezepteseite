import { newE2EPage } from '@stencil/core/testing';

describe('title-titleimage', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<title-titleimage></title-titleimage>');

    const element = await page.find('title-titleimage');
    expect(element).toHaveClass('hydrated');
  });
});
