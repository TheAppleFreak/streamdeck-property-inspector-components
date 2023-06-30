import { newSpecPage } from '@stencil/core/testing';
import { SdCheckbox } from '../sd-checkbox';

describe('sd-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SdCheckbox],
      html: `<sd-checkbox></sd-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <sd-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sd-checkbox>
    `);
  });
});
