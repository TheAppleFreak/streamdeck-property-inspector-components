import { newSpecPage } from '@stencil/core/testing';
import { SdTextarea } from '../sd-textarea';

describe('sd-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdTextarea],
      html: `<sd-textarea></sd-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-textarea>
    `);
  });
});
