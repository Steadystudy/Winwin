import type { Meta, StoryObj } from '@storybook/react';

import NavInvite from './NavInvite';

const meta: Meta<typeof NavInvite> = {
  component: NavInvite,
  title: 'Components/InviteNav',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type InviteStory = StoryObj<typeof NavInvite>;

export const Default: InviteStory = {
  args: {
    children: '상대팀 초대',
  },
};
