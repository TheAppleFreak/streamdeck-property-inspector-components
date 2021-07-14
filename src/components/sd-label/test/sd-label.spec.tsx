import { newSpecPage } from '@stencil/core/testing';
import { SdLabel } from '../sd-label';

describe('sd-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdLabel],
      html: `<sd-label></sd-label>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-label>
    `);
  });
});
