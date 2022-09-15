import { Component, Host, h } from '@stencil/core';
import { Badge } from '../internal/Badge';

@Component({
  tag: 'demo-section',
  styleUrl: 'demo-section.css',
  shadow: true,
})
export class DemoSection {

  render() {
    return (
      <Host>
        <div class="grid -mt-16 place-items-center text-slate-800">
          <div class="w-full max-w-6xl gap-4 mb-8 lg:rounded-md bg-opacity-60 glass">
            <div class="flex flex-col px-2 pt-2">
              <div class="flex flex-col">
                <span class="p-4 text-2xl font-semibold uppercase">Card demo</span>
              </div>
              <div class="grid grid-cols-1 mx-4 md:grid-cols-2 place-items-center">
                <demo-card
                  card-title="Functional Components"
                  subtitle="These badges are functional components"
                >
                  <Badge>Music</Badge>
                  <Badge>Books</Badge>
                  <Badge>Biking</Badge>
                </demo-card>
                <demo-card
                  card-title="Form Components"
                  subtitle={<span>This form uses <code>@tailwindcss/forms</code></span>}
                >
                  <div class="grid grid-cols-1 gap-2">
                    <label class="block">
                      <span class="text-gray-700">Input field</span>
                      <input type="text" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
                    </label>
                    <label class="block">
                      <span class="text-gray-700">Date picker</span>
                      <input type="date" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                  </div>
                </demo-card>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
