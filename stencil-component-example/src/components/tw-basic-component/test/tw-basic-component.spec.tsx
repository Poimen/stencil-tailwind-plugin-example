import { newSpecPage } from '@stencil/core/testing';
import { TwBasicComponent } from '../tw-basic-component';

describe('tw-basic-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TwBasicComponent],
      html: `<tw-basic-component></tw-basic-component>`,
    });
    expect(page.root).toEqualHtml(`
      <tw-basic-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tw-basic-component>
    `);
  });
});
