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
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <Card iconName="download" count="2.7K" subtitle="Downloads"></Card>
              <Card iconName="user" count="1.3K" subtitle="User"></Card>
              <Card iconName="file" count="74K" subtitle="Files"></Card>
              <Card iconName="place" count="46" subtitle="Places"></Card>
              {/* <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                  <p class="leading-relaxed">Places</p>
                </div>
              </div> */}
              {/* <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                  <p class="leading-relaxed">Places</p>
                </div>
              </div> */}
              {/* <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                  <p class="leading-relaxed">Places</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </Host>
    );
  }
}
