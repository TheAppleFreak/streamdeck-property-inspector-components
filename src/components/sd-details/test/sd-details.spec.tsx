import { newSpecPage } from '@stencil/core/testing';
import { SdDetails } from '../sd-details';

describe('sd-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdDetails],
      html: `<sd-details></sd-details>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-details>
    `);
  });
});
