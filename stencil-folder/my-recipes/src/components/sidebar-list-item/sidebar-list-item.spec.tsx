import { newSpecPage } from '@stencil/core/testing';
import { SidebarListItem } from './sidebar-list-item';

describe('sidebar-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SidebarListItem],
      html: `<sidebar-list-item></sidebar-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <sidebar-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sidebar-list-item>
    `);
  });
});
