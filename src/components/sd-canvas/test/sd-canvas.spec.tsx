import { newSpecPage } from '@stencil/core/testing';
import { SdCanvas } from '../sd-canvas';

describe('sd-canvas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdCanvas],
      html: `<sd-canvas></sd-canvas>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-canvas>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-canvas>
    `);
  });
});
