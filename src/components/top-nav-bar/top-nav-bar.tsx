import { Component, Host, h, FunctionalComponent, Element, State } from '@stencil/core';
import { Link } from '../internal/Link';

const IconLink: FunctionalComponent<{ to: string }> = ({ to }, children) => {
  return (
    <Link
      to={to}
      class="flex items-center gap-2 p-2 bg-transparent hover:bg-neutral-50 hover:bg-opacity-10"
    >
      {children}
    </Link>
  );
};

const LinkToGitHub: FunctionalComponent<{ to: string }> = ({ to }, children) => {
  return (
    <IconLink to={to}>
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
      {children}
    </IconLink>
  );
}

const LinkToStencil: FunctionalComponent<{ to: string }> = ({ to }) => {
  return (
    <IconLink to={to}>
      <svg class="fill-current" enable-background="new 0 0 916 220" viewBox="0 0 916 220" width="96" height="23" xmlns="http://www.w3.org/2000/svg"><path d="m277.9 134h33.2c.5 8.1 6.5 15.7 20.1 15.7 12.5 0 18.9-4.4 18.9-11.1 0-20.3-67.1-1.2-67.1-49.1 0-21.9 18.7-39.9 48.5-39.9 36.2 0 48.7 23.1 49.6 40.8h-31.6c-.7-7.6-6.5-14.5-18.2-14.5-10.6 0-16.6 5.1-16.6 11.8 0 20.3 66.9 0 66.9 49.6 0 21.7-18.5 38.8-51.2 38.8-38-.1-50.9-19.5-52.5-42.1z" /><path d="m424.5 52.3v-28.1h-32.8v149h32.8v-94.2h24.1v-26.7z" /><path d="m475.5 122.2c2.3 16.6 12.9 25.6 29.3 25.6 9.9 0 19.4-4.4 23.3-13.2h33c-7.2 24.5-29.3 41.3-57.2 41.3-35.8 0-60.9-26.3-60.9-63.4 0-35.8 24.9-63 60.7-63s60 27.2 60 63c0 5.3-.5 9.7-.5 9.7zm.4-23.5h54.9c-2.3-13.6-12.2-22.8-27.5-22.8-14.9 0-24.6 9-27.4 22.8z" /><path d="m606 67.1c5.5-10.4 18-17.5 36-17.5 29.1 0 44.5 19.4 44.5 48.2v75.4h-32.8v-71.8c0-14.1-6-23.8-20.5-23.8-15.9 0-24.7 10.2-24.7 26.3v69.2h-32.8v-120.8h30.3z" /><path d="m759.3 49.6c37.6 0 55.4 26.5 57.7 47.1h-33.7c-2.5-10.4-12.2-18-24.2-18-17.5 0-27.7 13.8-27.7 34.1s10.2 34.1 27.7 34.1c12 0 21.7-7.6 24.2-18h33.7c-2.3 20.5-20.1 47.1-57.7 47.1-35.1 0-60.7-27.2-60.7-63.2s25.6-63.2 60.7-63.2z" /><path d="m825.7 23.3c0-11.5 8.3-19.8 19.8-19.8s19.8 8.3 19.8 19.8-8.3 19.6-19.8 19.6c-11.4 0-19.8-8-19.8-19.6zm3.5 29h32.8v120.9h-32.8z" /><path d="m879.5 173.2v-162.1h32.8v162.1z" /><path d="m145.1 2.4h-67.6c-40.6 0-73.8 33.2-73.8 73.8v67.6c0 40.6 33.2 73.8 73.8 73.8h67.6c40.6 0 73.8-33.2 73.8-73.8v-67.6c0-40.6-33.2-73.8-73.8-73.8zm16.6 142.1c0 11.3-16.4 20.5-27.7 20.5h-45.4c-11.3 0-27.7-9.2-27.7-20.5v-1.1h100.8zm0-23.7h-73.1c-11.3 0-27.7-9.2-27.7-20.5v-1.1h73.1c11.3 0 27.7 9.2 27.7 20.5zm0-44.2h-100.8v-1.1c0-11.3 16.4-20.5 27.7-20.5h45.4c11.3 0 27.7 9.2 27.7 20.5z" /></svg>
    </IconLink>
  );
}

@Component({
  tag: 'top-nav-bar',
  styleUrl: 'top-nav-bar.css',
  shadow: true,
})
export class TopNavBar {
  @Element() el: HTMLElement;
  @State() isScrolled = false;

  componentDidLoad() {
    window.document.onscroll = this.onScroll;
  }

  private onScroll = async () => {
    console.log(window.scrollY, this.el.offsetTop);
    this.isScrolled = window.scrollY > this.el.offsetTop;
  };

  render() {
    const { isScrolled } = this;
    return (
      <Host>
        <div class={{
          'fixed inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-transparent': true,
          'bg-transparent': !isScrolled,
          'bg-zinc-100': isScrolled
        }}>
          <div class={{
            'flex items-center justify-between w-full p-2 h-hero': true,
            'text-slate-100': !isScrolled,
            'text-slate-800': isScrolled
          }}>
            <div class="flex items-center p-4">
              <span class="text-4xl font-title">Example<span class="font-extrabold text-purple-900">UI</span></span>
            </div>
            <div class="items-center hidden gap-3 p-4 sm:flex">
              <LinkToGitHub to="https://github.com/Poimen/stencil-tailwind-plugin-example">Example</LinkToGitHub>
              <LinkToGitHub to="https://github.com/Poimen/stencil-tailwind-plugin">Plugin</LinkToGitHub>
              <LinkToStencil to="https://stenciljs.com/" />
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
