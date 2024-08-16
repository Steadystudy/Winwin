import type { Meta, StoryObj } from '@storybook/react';

import ResultPage from '../app/room/result/page';

const meta: Meta<typeof ResultPage> = {
  component: ResultPage,
  title: 'Pages/ResultPage',
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ResultPage>;

export const Default: Story = {
  args: {},
};
