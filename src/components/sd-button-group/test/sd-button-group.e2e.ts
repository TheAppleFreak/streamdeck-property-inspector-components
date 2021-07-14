import { newE2EPage } from '@stencil/core/testing';

describe('sd-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-button-group></sd-button-group>');

    const element = await page.find('sd-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
