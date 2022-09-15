import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'stencil-component-example',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://poimen.github.io/',
      dir: 'docs'
    },
  ],
  plugins: [
    sass(),
    tailwind({
      tailwindConf,
      tailwindCssPath: './src/styles/tailwind.css',
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer()
        ]
      }
    }),
    tailwindHMR()
  ]
};
