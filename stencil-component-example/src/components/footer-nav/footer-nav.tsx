import { Component, Host, h } from '@stencil/core';
import { Link } from '../internal/Link';

@Component({
  tag: 'footer-nav',
  styleUrl: 'footer-nav.css',
  shadow: true,
})
export class FooterNav {
  render() {
    return (
      <Host>
        <div class="grid lg:rounded-md place-items-center text-slate-800 bg-zinc-200">
          <div class="flex flex-col-reverse w-full max-w-6xl gap-16 p-4 mt-4 mb-8 lg:flex-row">
            <div class="flex flex-col gap-2">
              <span class="text-4xl font-title">Example<span class="font-extrabold text-purple-900">UI</span></span>
              <span>Example of using <code>stencil-tailwind-plugin</code></span>
              <span>Website inspiration taken from <Link to="https://daisyui.com/">daisyUI</Link></span>
            </div>
            <div class="flex flex-col">
              <span class="mb-2 font-bold uppercase opacity-50">Links</span>
              <ul class="flex flex-col gap-2 lg:gap-4">
                <Link to="https://github.com/Poimen/stencil-tailwind-plugin-example">This Example Repository</Link>
                <Link to="https://github.com/Poimen/stencil-tailwind-plugin">Plugin GitHub repository</Link>
                <Link to="https://stenciljs.com/">StencilJS</Link>
              </ul>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
