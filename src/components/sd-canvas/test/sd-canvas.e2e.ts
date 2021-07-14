import { newE2EPage } from '@stencil/core/testing';

describe('sd-canvas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-canvas></sd-canvas>');

    const element = await page.find('sd-canvas');
    expect(element).toHaveClass('hydrated');
  });
});
