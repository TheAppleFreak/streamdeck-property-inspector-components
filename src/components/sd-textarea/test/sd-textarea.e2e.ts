import { newE2EPage } from '@stencil/core/testing';

describe('sd-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sd-textarea></sd-textarea>');

    const element = await page.find('sd-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
