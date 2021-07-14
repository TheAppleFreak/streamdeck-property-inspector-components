import { newE2EPage } from '@stencil/core/testing';

describe('sd-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-label></sd-label>');

    const element = await page.find('sd-label');
    expect(element).toHaveClass('hydrated');
  });
});
