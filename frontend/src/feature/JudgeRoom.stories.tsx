import type { Meta, StoryObj } from '@storybook/react';

import JudgeRoom from './JudgeRoom';

const meta: Meta<typeof JudgeRoom> = {
  component: JudgeRoom,
  title: 'Features/JudgeRoom',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof JudgeRoom>;

export const Default: Story = {
  args: {},
};
