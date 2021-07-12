import { newSpecPage } from '@stencil/core/testing';
import { SdRoot } from '../sd-root';

describe('sd-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdRoot],
      html: `<sd-root></sd-root>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-root>
    `);
  });
});
