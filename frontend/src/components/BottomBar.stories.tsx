import type { Meta, StoryObj } from '@storybook/react';

import BottomBar from './BottomBar';

const meta: Meta<typeof BottomBar> = {
  component: BottomBar,
  title: 'Components/BottomBar',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BottomBar>;

export const Default: Story = {
  args: {},
};
