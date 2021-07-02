import { Component, Host, h } from '@stencil/core';
import { Card } from './card';

@Component({
  tag: 'tw-transition-cards',
  styleUrl: 'tw-transition-cards.scss',
  shadow: true,
})
export class TwTransitionCards {
  render() {
    return (
      <Host>
        <section class="text-gray-700 body-font">
          <div class="card__container">
            <div class="flex flex-wrap -m-4 text-center">
              <Card iconName="download" count="2.7K" subtitle="Downloads"></Card>
              <Card iconName="user" count="1.3K" subtitle="User"></Card>
              <Card iconName="file" count="74K" subtitle="Files"></Card>
              <Card iconName="place" count="46" subtitle="Places"></Card>
            </div>
          </div>
        </section>
      </Host>
    );
  }
}
