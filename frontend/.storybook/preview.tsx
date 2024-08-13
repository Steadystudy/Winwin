import type { Preview } from '@storybook/react';
import React from 'react';
import { pretendard } from '../src/fonts';
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
    nextjs: {
      appDirectory: true,
    },
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
  decorators: [
    (Story) => (
      <div className={`${pretendard.variable}`}>
        <div className={`${pretendard.className}`}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
