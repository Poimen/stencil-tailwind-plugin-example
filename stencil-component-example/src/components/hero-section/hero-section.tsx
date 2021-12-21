import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.css',
  shadow: true,
})
export class HeroSection {

  render() {
    return (
      <Host>
        <div class="grid min-h-screen overflow-hidden pt-hero bg-gradient-to-br from-fuchsia-500 to-indigo-500 place-items-center">
          <div class="flex flex-col justify-between w-full max-w-6xl gap-4 p-4 mt-10 mb-48 item text-slate-100">
            <h1 class="flex flex-col gap-2 py-4 mb-2 font-extrabold text-center">
              <span class="mb-2 text-5xl lg:text-7xl">stencil-tailwind-plugin</span>
              <span class="text-4xl">Tailwind CSS + StencilJS</span>
            </h1>
            <div class="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
              <div class="flex items-center w-full max-w-md gap-2 p-5 font-mono text-xs bg-transparent border-2 rounded-md md:text-base sm:text-sm border-opacity-40">
                <code>$</code>
                <code>npm -D stencil-tailwind-plugin</code>
              </div>
              <div class="flex flex-col max-w-sm gap-2 my-2">
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Use Tailwind with StencilJS
                </div>
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Use Tailwind inline
                </div>
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Use <code>@apply</code> styles
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
