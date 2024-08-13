import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/nextjs',
  staticDirs: [
    '../public',
    { from: '../public/fonts', to: '/public/fonts' },
    { from: '../public/icons', to: '/icons' },
  ],
};

export default config;
