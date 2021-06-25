import { newE2EPage } from '@stencil/core/testing';

describe('tw-basic-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tw-basic-component></tw-basic-component>');

    const element = await page.find('tw-basic-component');
    expect(element).toHaveClass('hydrated');
  });
});
