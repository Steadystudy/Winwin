import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const customViewports = {
  SamsungS23: {
    name: 'SamsungS23',
    styles: {
      width: '360px',
      height: '780px',
    },
  },
  Iphone14: {
    name: 'Iphone14',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: customViewports,
      defaultViewport: 'SamsungS23',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
