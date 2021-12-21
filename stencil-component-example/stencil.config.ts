import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind from 'stencil-tailwind-plugin';
import tailwindConf from './tailwind.config';

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
      baseUrl: 'https://poimen.github.io/stencil-tailwind-plugin-example/'
    },
  ],
  plugins: [
    sass(),
    tailwind({
      tailwindConf,
      tailwindCssPath: './src/styles/tailwind.css',
    })
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }
};
