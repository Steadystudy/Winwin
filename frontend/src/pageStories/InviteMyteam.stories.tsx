import type { Meta, StoryObj } from '@storybook/react';

import InviteMyteam from '../app/invite/myteam/page';

const meta: Meta<typeof InviteMyteam> = {
  component: InviteMyteam,
  title: 'Pages/InviteMyteam',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InviteMyteam>;

export const Default: Story = {
  args: {},
};
