import { newSpecPage } from '@stencil/core/testing';
import { SdButtonGroup } from '../sd-button-group';

describe('sd-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdButtonGroup],
      html: `<sd-button-group></sd-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-button-group>
    `);
  });
});
