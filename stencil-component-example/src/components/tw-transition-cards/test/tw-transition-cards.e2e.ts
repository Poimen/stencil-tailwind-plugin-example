import { newE2EPage } from '@stencil/core/testing';

describe('tw-transition-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tw-transition-cards></tw-transition-cards>');

    const element = await page.find('tw-transition-cards');
    expect(element).toHaveClass('hydrated');
  });
});
