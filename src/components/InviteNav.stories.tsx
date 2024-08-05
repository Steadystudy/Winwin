import type { Meta, StoryObj } from '@storybook/react';

import InviteNav from './InviteNav';

const meta: Meta<typeof InviteNav> = {
  component: InviteNav,
  title: 'Components/InviteNav',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InviteNav>;

export const Default: Story = {
  args: {
    children: '상대팀 초대',
  },
};
