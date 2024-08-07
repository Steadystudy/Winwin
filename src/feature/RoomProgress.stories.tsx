import type { Meta, StoryObj } from '@storybook/react';

import RoomProgress from './RoomProgress';

const meta: Meta<typeof RoomProgress> = {
  component: RoomProgress,
  title: 'Features/RoomProgress',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RoomProgress>;

export const Default: Story = {
  args: {},
};
