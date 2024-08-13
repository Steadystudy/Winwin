import type { Meta, StoryObj } from '@storybook/react';

import CreateRoom from './CreateRoom';

const meta: Meta<typeof CreateRoom> = {
  component: CreateRoom,
  title: 'Features/CreateRoom',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CreateRoom>;

export const Default: Story = {
  args: {},
};
