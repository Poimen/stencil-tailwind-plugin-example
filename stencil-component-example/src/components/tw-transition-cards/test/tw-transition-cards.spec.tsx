import { newSpecPage } from '@stencil/core/testing';
import { TwTransitionCards } from '../tw-transition-cards';

describe('tw-transition-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TwTransitionCards],
      html: `<tw-transition-cards></tw-transition-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <tw-transition-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tw-transition-cards>
    `);
  });
});
