import type { Meta, StoryObj } from '@storybook/react';

import RoomResult from './RoomResult';

const meta: Meta<typeof RoomResult> = {
  component: RoomResult,
  title: 'Features/RoomResult',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RoomResult>;

export const Default: Story = {
  args: {},
};
