import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'demo-card',
  styleUrl: 'demo-card.css',
  shadow: true,
})
export class DemoCard {
  @Prop() cardTitle: string;
  @Prop() subtitle: string;

  render() {
    const { cardTitle, subtitle } = this;

    return (
      <Host>
        <div class="flex flex-col items-center justify-between px-4 py-8 mb-4 bg-white rounded-md shadow h-[272px] w-[312px]">
          <div class="flex flex-col items-center">
            <span class="text-4xl font-semibold font-title">{cardTitle}</span>
            <span class="text-sm">{subtitle}</span>
          </div>
          <div class="flex gap-2 mt-3">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
