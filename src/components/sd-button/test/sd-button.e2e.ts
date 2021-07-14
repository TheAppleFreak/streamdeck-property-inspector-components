import { newE2EPage } from '@stencil/core/testing';

describe('sd-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-button></sd-button>');

    const element = await page.find('sd-button');
    expect(element).toHaveClass('hydrated');
  });
});
