import type { Meta, StoryObj } from '@storybook/react';

import AvatarRow from './AvatarRow';

const meta: Meta<typeof AvatarRow> = {
  component: AvatarRow,
  title: 'Components/AvatarRow',
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof AvatarRow>;

export const Default: Story = {
  args: {
    name: '하하',
  },
};
