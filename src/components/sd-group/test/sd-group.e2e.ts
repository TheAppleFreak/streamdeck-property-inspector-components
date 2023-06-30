import { newE2EPage } from '@stencil/core/testing';

describe('sd-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-group></sd-group>');

    const element = await page.find('sd-group');
    expect(element).toHaveClass('hydrated');
  });
});
