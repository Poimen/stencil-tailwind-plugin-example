import { h, FunctionalComponent } from '@stencil/core';

export interface CardProps {
  iconName: string;
  count: string;
  subtitle: string
}

const DownloadIconSvg = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"></path><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path></svg>';
const UserIconSvg = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg>'
const FileIconSvg = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6"></path><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path></svg>'
const PlaceIconSvg = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'

const DownloadIcon = () => (
  <div innerHTML={DownloadIconSvg}></div>
);
const UserIcon = () => (
  <div innerHTML={UserIconSvg}></div>
);
const FileIcon = () => (
  <div innerHTML={FileIconSvg}></div>
);
const PlaceIcon = () => (
  <div innerHTML={PlaceIconSvg}></div>
);


export const Card: FunctionalComponent<CardProps> = ({ iconName, count, subtitle }) => {
  const makeIcon = () => {
    switch(iconName) {
      default:
      case 'download': return DownloadIcon;
      case 'user': return UserIcon;
      case 'file': return FileIcon;
      case 'place': return PlaceIcon;
    }
  }

  const Icon = makeIcon();
  return (
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
      <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <Icon />
        <h2 class="title-font font-medium text-3xl text-gray-900">{count}</h2>
        <p class="leading-relaxed">{subtitle}</p>
      </div>
    </div>
  )
};
