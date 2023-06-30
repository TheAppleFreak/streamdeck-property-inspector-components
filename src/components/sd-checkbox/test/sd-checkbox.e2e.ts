import { newE2EPage } from '@stencil/core/testing';

describe('sd-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-checkbox></sd-checkbox>');

    const element = await page.find('sd-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
