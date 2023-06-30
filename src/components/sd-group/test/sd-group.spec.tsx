import { newSpecPage } from '@stencil/core/testing';
import { SdGroup } from '../sd-group';

describe('sd-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdGroup],
      html: `<sd-group></sd-group>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-group>
    `);
  });
});
