import { newSpecPage } from '@stencil/core/testing';
import { ListMultiplicator } from './list-multiplicator';

describe('list-multiplicator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListMultiplicator],
      html: `<list-multiplicator></list-multiplicator>`,
    });
    expect(page.root).toEqualHtml(`
      <list-multiplicator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </list-multiplicator>
    `);
  });
});
