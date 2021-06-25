import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tw-basic-component',
  styleUrl: 'tw-basic-component.css',
  shadow: true,
})
export class TwBasicComponent {
  render() {
    return (
      <Host>
        <div class="bg-[#343da3] flex items-center justify-center">
          <div class="bg-[#5561E5] p-5 flex items-start justify-center flex-col w-6/12 rounded-lg">
            <h1 class="text-[3em] text-[#dedede] font-bold">
              Hello 👋, tailwind jit!
            </h1>
            <p class="text-[#fff]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam omnis
              fuga eum illo dolore odit, enim exercitationem quos ipsa numquam,
              ratione eveniet magni debitis illum molestias amet velit maxime
            </p>
            <button class="p-2 mt-4 bg-[#eee] rounded-md">Button</button>
          </div>
        </div>
      </Host>
    );
  }
}
