import { newE2EPage } from '@stencil/core/testing';

describe('sd-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-root></sd-root>');

    const element = await page.find('sd-root');
    expect(element).toHaveClass('hydrated');
  });
});
