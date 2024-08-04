import type { Meta, StoryObj } from '@storybook/react';

import AvatarProfile from './AvatarProfile';

const meta: Meta<typeof AvatarProfile> = {
  component: AvatarProfile,
  title: 'Components/AvatarProfile',
  tags: ['autodocs'],
  argTypes: {
    name: {
      type: 'string',
    },
  },
};
export default meta;

type Story = StoryObj<typeof AvatarProfile>;

export const Default: Story = {
  args: {},
};
