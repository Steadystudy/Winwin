import type { Meta, StoryObj } from '@storybook/react';

import RoomJudgePage from '../app/room/[id]/judge/page';

const meta: Meta<typeof RoomJudgePage> = {
  component: RoomJudgePage,
  title: 'Pages/RoomJudgePage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RoomJudgePage>;

export const Default: Story = {
  args: {},
};
