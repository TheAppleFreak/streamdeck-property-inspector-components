import { newE2EPage } from '@stencil/core/testing';

describe('sd-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-details></sd-details>');

    const element = await page.find('sd-details');
    expect(element).toHaveClass('hydrated');
  });
});
