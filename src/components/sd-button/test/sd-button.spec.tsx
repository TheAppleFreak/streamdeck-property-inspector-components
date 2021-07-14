import { newSpecPage } from '@stencil/core/testing';
import { SdButton } from '../sd-button';

describe('sd-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdButton],
      html: `<sd-button></sd-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-button>
    `);
  });
});
