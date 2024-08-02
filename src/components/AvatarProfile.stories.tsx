import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './AvatarProfile';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  argTypes: {
    name: {
      type: 'string',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};
