import type { Meta, StoryObj } from '@storybook/react';

import ConfirmRoom from './ConfirmRoom';

const meta: Meta<typeof ConfirmRoom> = {
  component: ConfirmRoom,
  title: 'Features/ConfirmRoom',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ConfirmRoom>;

export const Default: Story = {
  args: {},
};
