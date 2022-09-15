import { FunctionalComponent, h } from '@stencil/core';

export interface BadgeProps {
  class?: string;
  classObj?: {
    [className: string]: boolean;
  };
}
export const Badge: FunctionalComponent<BadgeProps> = ({class: classes = '', classObj }, children) => {
  return (
    <span
      class={{
        'px-4 py-2 text-xs font-semibold text-green-800 uppercase bg-green-300 rounded-xl bg-opacity-30': true,
        [classes]: true,
        ...classObj
      }}
    >
      { children }
    </span>
  );
};
